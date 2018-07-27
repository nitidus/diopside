var ejs = require('ejs')

var GEM = require('./gem/gem-init')

var crypto = require('crypto')
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app){
  MongoClient.connect(connectionUrl, function(err, db){
    assert.equal(null, err);

    var cipher = crypto.createCipher('aes192', GEM.users.password)
    var crypted = cipher.update('', 'utf8', 'hex')
        crypted += cipher.final('hex')

    GEM.users.password = crypted

    db.collection('users').find({email: GEM.users.email}).toArray(function(userCheckErr, userCheckDocs){
      if (userCheckErr === null && userCheckDocs.length === 0 ){
        db.collection('users').insertOne(GEM.users, function(userErr, userDoc){
          assert.equal(null, userErr);
          assert.equal(1, userDoc.insertedCount);

          var user_id = userDoc.insertedId,
              token_secret = ((new Date()).getTime()).toString() + Math.random() + GEM.tokens.username + GEM.tokens.password,
              token = crypto.createHmac('sha256', GEM_KEY)
                             .update(token_secret)
                             .digest('hex'),
              token = token.replaceAt(8, '.'),
              token = token.replaceAt(16, '.');

          db.collection('tokens').find({username: GEM.tokens.username}).toArray(function(tokenCheckErr, tokenCheckDocs){
            GEM.tokens.user_id = new ObjectID(user_id);
            GEM.tokens.access_token = token;

            if (tokenCheckErr === null && tokenCheckDocs.length === 0 ){
              db.collection('tokens').insertOne(GEM.tokens, function(tokenErr, tokenDoc){
                assert.equal(null, tokenErr);
                assert.equal(1, tokenDoc.insertedCount);

                db.close();
              })
            }
          })
        })
      }else{
        db.close();
      }
    })
  })


}
