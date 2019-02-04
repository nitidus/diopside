var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

var CONSTANTS = require('./constants');

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, _port){
  app.get('/profile', function(req, res){
    if (req.session.currentUser){
      var credit = req.session.credit;

      if (typeof credit != 'undefined'){
        if (typeof req.query.Status != 'undefined'){
          if (req.query.Status == 'OK'){
            credit.payment.content.paid = true;
          }else{
            credit.payment.content.paid = false;
          }

          req.session.credit = credit;
          req.session.save();

          if (credit.payment.content.paid){
            res.redirect('/profile/payment/credit/' + credit.payment.content.authority + '/succeeded')
          }else{
            res.redirect('/profile/payment/credit/' + credit.payment.content.authority + '/failed')
          }
        }
      }else{
        var hostname = req.protocol + '://' + req.get('host');

        request(hostname + '/users/' + req.session.currentUser._id,
        function (getBalanceErr, getBalanceRes, getBalanceBody){
          var requestedUser = JSON.parse(getBalanceRes.body);

          req.session.currentUser = requestedUser.data;
          req.session.save();

          request(hostname + '/services/grouped/' + req.session.currentUser._id,
          function (currentUserGroupedServicesErr, currentUserGroupedServicesRes, currentUserGroupedServicesBody){
            var currentUserGroupedServices = JSON.parse(currentUserGroupedServicesBody);

            res.cookie('hashed-token', requestedUser.data._id);

            req.session.currentUser = requestedUser.data;
            req.session.save();

            if (req.session.services){
              res.render('profile', {currentUser: req.session.currentUser, services: currentUserGroupedServices.data, servicesSession: req.session.services, sub: 'dashboard', constants: CONSTANTS})
            }else{
              res.render('profile', {currentUser: req.session.currentUser, services: currentUserGroupedServices.data, sub: 'dashboard', constants: CONSTANTS})
            }
          })
        })
      }
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts/:serviceid', function(req, res){
    if (req.session.currentUser){
      var hostname = req.protocol + '://' + req.get('host');

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('services')
        .aggregate([
            {
              "$match": {
                _id: new ObjectID(req.params.serviceid),
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
        .limit(1)
        .toArray(function(err, docs){
          assert.equal(null, err);

          if (docs.length > 0){
            var doc = Array.isArray(docs)? docs[0]: docs;

            request(hostname + '/analysis/' + req.session.currentUser._id,
            function (currentUserAnalysisErr, currentUserAnalysisRes, currentUserAnalysisBody){
              var currentUserAnalysisBody = JSON.parse(currentUserAnalysisBody),
                  currentUserAnalysis = currentUserAnalysisBody.data;

              res.cookie('hashed-token', JSON.stringify({
                user: req.session.currentUser._id,
                service: req.params.serviceid
              }));

              if (req.session.services){
                res.render('profile', {currentUser: req.session.currentUser, servicesSession: req.session.services, service: doc, constants: CONSTANTS, sub: 'service/tokenized', analysis: currentUserAnalysis})
              }else{
                res.render('profile', {currentUser: req.session.currentUser, service: doc, constants: CONSTANTS, sub: 'service/tokenized', analysis: currentUserAnalysis})
              }
            })

            db.close();
          }else{
            res.redirect('/login')
          }
        })
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts/:serviceid/scheduled/media', function(req, res){
    if (req.session.currentUser){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('services')
        .aggregate([
            {
              "$match": {
                _id: new ObjectID(req.params.serviceid),
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
        .limit(1)
        .toArray(function(err, docs){
          assert.equal(null, err);

          if (docs.length > 0){
            var doc = Array.isArray(docs)? docs[0]: docs;

            if (req.session.services){
              res.render('profile', {currentUser: req.session.currentUser, servicesSession: req.session.services, service: doc, constants: CONSTANTS, sub: 'service/tokenized/scheduled/media'})
            }else{
              res.render('profile', {currentUser: req.session.currentUser, service: doc, constants: CONSTANTS, sub: 'service/tokenized/scheduled/media'})
            }

            db.close();
          }else{
            res.redirect('/login')
          }
        })
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/accounts/:serviceid/scheduled/media/upload', function(req, res){
    if (req.session.currentUser){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('services')
        .aggregate([
            {
              "$match": {
                _id: new ObjectID(req.params.serviceid),
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
        .limit(1)
        .toArray(function(err, docs){
          assert.equal(null, err);

          if (docs.length > 0){
            var doc = Array.isArray(docs)? docs[0]: docs;

            if (req.session.services){
              res.render('profile', {currentUser: req.session.currentUser, servicesSession: req.session.services, service: doc, constants: CONSTANTS, sub: 'service/tokenized/scheduled/media/upload'})
            }else{
              res.render('profile', {currentUser: req.session.currentUser, service: doc, constants: CONSTANTS, sub: 'service/tokenized/scheduled/media/upload'})
            }

            db.close();
          }else{
            res.redirect('/login')
          }
        })
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/edit', function(req, res){
    if (req.session.currentUser){
      res.render('profile', {currentUser: req.session.currentUser, sub: 'edit'})
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/wallet', function(req, res){
    if (req.session.currentUser){
      var hostname = req.protocol + '://' + req.get('host');

      request(hostname + '/credits/' + req.session.currentUser._id,
      function (creditsErr, creditsRes, creditsBody){
        var requestedCredits = JSON.parse(creditsRes.body);

        if (requestedCredits.data.length > 0){
          res.render('profile', {currentUser: req.session.currentUser, credits: requestedCredits.data, sub: 'wallet'})
        }else{
          res.render('profile', {currentUser: req.session.currentUser, sub: 'wallet'})
        }
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/profile/wallet/new', function(req, res){
    if (req.session.currentUser){
      res.render('profile', {currentUser: req.session.currentUser, sub: 'credit'})
    }else{
      res.redirect('/login')
    }
  })
}
