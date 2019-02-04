var request = require('request');

var crypto = require('crypto');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID;

var CONSTANTS = require('./constants');

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

module.exports = function(app, _port){
  app.get('/profile/accounts/unpaid/:token', function(req, res){
    if (req.session.currentUser){
      if (req.session.services){
        var tokenizedService = {
          status: false,
          index: null
        };

        req.session.services.find(function(service, i){

          if (service.owner.access_token == req.params.token){
            tokenizedService.status = true;
            tokenizedService.index = i;
          }
        });

        res.cookie('service', JSON.stringify(req.session.services[tokenizedService.index]));

        res.render('profile', {currentUser: req.session.currentUser, sub: 'unpaid/tokenized', servicesSession: req.session.services, tokenizedService: tokenizedService, constants: CONSTANTS})
      }else{
        res.redirect('/profile/accounts')
      }
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts/unpaid', function(req, res){
    if (req.session.currentUser){
      if (req.session.services){
        res.render('profile', {currentUser: req.session.currentUser, sub: 'unpaid', servicesSession: req.session.services, constants: CONSTANTS})
      }else{
        res.render('profile', {currentUser: req.session.currentUser, sub: 'unpaid', constants: CONSTANTS})
      }
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts', function(req, res){
    if (req.session.currentUser){
      var hostname = req.protocol + '://' + req.get('host');

      request(hostname + '/users/' + req.session.currentUser._id,
      function (getErr, getRes, getBody){
        var requestedUser = JSON.parse(getRes.body);

        req.session.currentUser = requestedUser.data;
        req.session.save()

        MongoClient.connect(connectionUrl, function(err, db){
          assert.equal(null, err);

          db.collection('services')
          .aggregate([
              {
                "$match": {
                  user_id: new ObjectID(req.session.currentUser._id),
                  "payment.content.paid": true
                }
              },
              {
                  "$lookup": {
                      "from": "tokens",
                      "localField": "user_id",
                      "foreignField": "user_id",
                      "as": "owner"
                  }
              },
              {
                  "$unwind": "$owner"
              },
              {
                  "$project": {
                      "owner.user_id": 0
                  }
              }
          ])
          .toArray(function(err, docs){
            assert.equal(null, err);

            if (docs.length > 0){
              request(hostname + '/analysis/' + req.session.currentUser._id,
              function (currentUserAnalysisErr, currentUserAnalysisRes, currentUserAnalysisBody){
                var currentUserAnalysisBody = JSON.parse(currentUserAnalysisBody),
                    currentUserAnalysis = currentUserAnalysisBody.data;

                if (req.session.services){
                  res.render('profile', {currentUser: req.session.currentUser, sub: 'accounts', services: docs, constants: CONSTANTS, analysis: currentUserAnalysis, servicesSession: req.session.services})
                }else{
                  res.render('profile', {currentUser: req.session.currentUser, sub: 'accounts', services: docs, constants: CONSTANTS, analysis: currentUserAnalysis})
                }
              })
            }else{
              res.redirect('/profile/accounts/new/')
            }

            db.close();
          })
        })
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts/new', function(req, res){
    if (req.session.currentUser){
      if (req.session.services){
        var lastService = req.session.services[req.session.services.length - 1];

        if (typeof lastService.payment != 'undefined'){
          if (typeof req.query.Status != 'undefined'){
            if (req.query.Status == 'OK'){
              lastService.payment.content.paid = true;
            }else{
              lastService.payment.content.paid = false;
            }

            req.session.services[req.session.services.length - 1] = lastService;
            req.session.save();

            if (lastService.payment.content.paid){
              res.redirect('/profile/payment/service/' + lastService.payment.content.authority + '/succeeded')
            }else{
              res.redirect('/profile/payment/service/' + lastService.payment.content.authority + '/failed')
            }
          }else{
            res.render('profile', {currentUser: req.session.currentUser, sub: 'new-account', servicesSession: req.session.services, constants: CONSTANTS})
          }
        }else{
          res.render('profile', {currentUser: req.session.currentUser, sub: 'new-account', servicesSession: req.session.services, constants: CONSTANTS})
        }
      }else{
        res.render('profile', {currentUser: req.session.currentUser, sub: 'new-account', constants: CONSTANTS})
      }
    }else{
      res.redirect('/login')
    }
  })

  app.post('/profile/accounts/authorization', function(req, res){
    if (req.session.currentUser){
      var token_secret = ((new Date()).getTime()).toString() + Math.random() + req.body.username + req.body.password,
          token = crypto.createHmac('sha256', GEM_KEY)
                         .update(token_secret)
                         .digest('hex'),
          token = token.replaceAt(8, '.'),
          token = token.replaceAt(16, '.');

      req.body.access_token = token;
      req.body.user_id = new ObjectID(req.body.user_id);

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').insertOne(req.body, function(err, doc){
          assert.equal(null, err);

          res.json({
            meta: {
              code: 200
            },
            data: req.body
          })

          db.close();
        })
      })
    }else{
      res.redirect('/login')
    }
  })
}
