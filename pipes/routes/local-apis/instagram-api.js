var fs = require('fs')
var rimraf = require('rimraf')

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

var isStream = require('isstream')
var Stream = require('stream')

var crypto = require('crypto');

var Client = require('instagram-private-api').V1;

var _ = require('underscore');
var Promise = require('bluebird');

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

function createTemporaryDirectory(){
  var dir = './tmp';

  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

function removeTemporaryDirectory(){
  var dir = './tmp';

  if (fs.existsSync(dir)){
    rimraf(dir, function (){});
  }
}

module.exports = function(app, _port){
  app.post('/api/instagram/media/:media_id/likes', function(req, res){
    if (req.body.access_token != '' && req.params.media_id){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.body.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
              Client.Like.create(session, req.params.media_id)
                .then(function(data) {
                  res.json({
                    meta: {
                      code: 200
                    },
                    data: data.params
                  })
                })
                .catch(function(error){
                  res.json({
                    meta: {
                      code: 700,
                      error_type: error.name,
                      error_message: error.message
                    }
                  })
                })
            })
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.post('/api/instagram/media/:media_id/comments', function(req, res){
    if (req.body.access_token != '' && req.body.text != '' && req.params.media_id){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.body.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
              Client.Comment.create(session, req.params.media_id, req.body.text)
                .then(function(data) {
                  var commentResponse = data._params;

                  commentResponse.owner = data.account._params;

                  res.json({
                    meta: {
                      code: 200
                    },
                    data: commentResponse
                  })
                })
                .catch(function(error){
                  res.json({
                    meta: {
                      code: 700,
                      error_type: error.name,
                      error_message: error.message
                    }
                  })
                })
            })
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.post('/api/instagram/users', function(req, res){
    if (req.body && req.body.username != '' && req.body.password != ''){
      var username = req.body.username,
          password = req.body.password,
          device = new Client.Device(username),
          storage = new Client.CookieMemoryStorage();

      Client.Session.create(device, storage, username, password)
        .then(function(session) {
          session.getAccount().then(function(account) {
            res.json({
              meta: {
                code: 200
              },
              data: account.params
            })
          })
        })
        .catch(Client.Exceptions.AuthenticationError, function(error){
          res.json({
            meta: {
              code: 700,
              error_type: error.name,
              error_message: error.message
            }
          })
        })
    }
  })

  app.post('/api/instagram/users/follow', function(req, res){
    if (req.body.access_token != '' && req.body.username != ''){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.body.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
              return [session, Client.Account.searchForUser(session, req.body.username)]
            })
            .spread(function(session, account) {
          		return Client.Relationship.create(session, account.id);
          	})
          	.then(function(relationship) {
              res.json({
                meta: {
                  code: 200
                },
                data: relationship.params
              })
          	})
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.post('/api/instagram/upload', function(req, res){
    if (req.body.service_id != '' && req.body.access_token != ''){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.body.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          db.collection('schedules').find({service_id: new ObjectID(req.body.service_id), done: null}).toArray(function(schedulesCheckErr, schedulesCheckDocs){
            assert.equal(null, schedulesCheckErr);

            var today = new Date(),
                schedules = schedulesCheckDocs;

            try {
              createTemporaryDirectory();

              for (var i = 0; i < schedules.length; i++) {
                var scheduledAt = new Date(schedules[i].scheduled_at),
                    base64Image = schedules[i].media.content.split(';base64,').pop(),
                    secret_key = ((new Date()).getTime()).toString() + Math.random() + schedules[i].service_id + schedules[i]._id,
                    token = crypto.createHmac('sha256', GEM_KEY)
                                  .update(secret_key)
                                  .digest('hex');

                var tokenizedScheduledBase64ImagePath = './tmp/' + token + '.jpg';

                fs.writeFile(tokenizedScheduledBase64ImagePath, base64Image, {encoding: 'base64'}, function(scheduleImageCreationErr) {
                  if (scheduleImageCreationErr){
                    res.json({
                      meta: {
                        code: 700,
                        error_type: 'BadFSExecutionException',
                        error_message: scheduleImageCreationErr
                      }
                    })
                  }
                });

                if ((
                  (scheduledAt.getTime() + (1000 * 60 * 10)) <= today.getTime() &&
                  (scheduledAt.getTime() + (1000 * 60 * 10)) >= (today.getTime() - (1000 * 60 * 10))
                ) ||
                (
                  (scheduledAt.getTime() - (1000 * 60 * 10)) <= today.getTime() &&
                  (scheduledAt.getTime() - (1000 * 60 * 10)) >= (today.getTime() - (1000 * 60 * 10))
                )){
                  Client.Session.create(device, storage, username, password)
                  .then(function(session) {
                    Client.Upload.photo(session, tokenizedScheduledBase64ImagePath)
                    	.then(function(upload) {
                    		return Client.Media.configurePhoto(session, upload.params.uploadId, schedules[i].media.caption);
                    	})
                    	.then(function(medium) {
                        fs.unlinkSync(tokenizedScheduledBase64ImagePath);

                        res.json({
                          meta: {
                            code: 200
                          },
                          data: medium.params
                        })
                    	})
                      .catch(function(error){
                        res.json({
                          meta: {
                            code: 700,
                            error_type: error.name,
                            error_message: error.message
                          }
                        })
                      })
                  })
                  .catch(function(error){
                    res.json({
                      meta: {
                        code: 700,
                        error_type: error.name,
                        error_message: error.message
                      }
                    })
                  })
                }
              }

              removeTemporaryDirectory();
            } catch (tmpDirCreationErr) {
              res.json({
                meta: {
                  code: 700,
                  error_type: 'BadFSExecutionException',
                  error_message: tmpDirCreationErr
                }
              })
            }

            db.close();
          })

          db.close()
        })
      })
    }
  })

  app.get('/api/instagram/locations/:location_id/media/recent', function(req, res){
    if (req.query.access_token != ''){
      var COUNT = req.query.count || 10;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                var feed = new Client.Feed.LocationMedia(session, req.params.location_id),
                    plainFeeds = [];

                Promise.mapSeries(_.range(0, 1), function() {
                  return feed.get();
                })
                .then(function(feeds) {
                  feeds = feeds[0];

                  COUNT = (COUNT > feeds.length)? feeds.length : COUNT;

                  for (var i = 0; i < COUNT; i++) {
                    var currentFeed = feeds[i]._params;

                    delete currentFeed.carouselMedia;

                    currentFeed.owner = feeds[i].account._params;
                    plainFeeds.push(currentFeed);
                  }

                  res.json({
                    meta: {
                      code: 200
                    },
                    data: plainFeeds
                  })
                })
            })
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.get('/api/instagram/users/:user_id/media/recent', function(req, res){
    if (req.query.access_token != ''){
      var COUNT = req.query.count || 10;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                var feed = new Client.Feed.UserMedia(session, req.params.user_id),
                    plainFeeds = [];

                Promise.mapSeries(_.range(0, 1), function() {
                  return feed.get();
                })
                .then(function(feeds) {
                  feeds = feeds[0];

                  COUNT = (COUNT > feeds.length)? feeds.length : COUNT;

                  for (var i = 0; i < COUNT; i++) {
                    var currentFeed = feeds[i]._params;

                    delete currentFeed.carouselMedia;

                    currentFeed.owner = feeds[i].account._params;
                    plainFeeds.push(currentFeed);
                  }

                  res.json({
                    meta: {
                      code: 200
                    },
                    data: plainFeeds
                  })
                })
            })
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.get('/api/instagram/tags/:tag_name/media/recent', function(req, res){
    if (req.query.access_token != ''){
      var COUNT = req.query.count || 10;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, tokenDoc){
          assert.equal(null, tokenErr);

          var username = tokenDoc.username,
              password = tokenDoc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                var feed = new Client.Feed.TagMedia(session, req.params.tag_name),
                    plainFeeds = [];

                Promise.mapSeries(_.range(0, 1), function() {
                	return feed.get();
                })
                .then(function(feeds) {
                	feeds = feeds[0];

                  COUNT = (COUNT > feeds.length)? feeds.length : COUNT;

                  for (var i = 0; i < COUNT; i++) {
                    var currentFeed = feeds[i]._params;

                    delete currentFeed.carouselMedia;

                    currentFeed.owner = feeds[i].account._params;
                    plainFeeds.push(currentFeed);
                  }

                  res.json({
                    meta: {
                      code: 200
                    },
                    data: plainFeeds
                  })
                })
            })
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

            db.close();
        })
      })
    }
  })

  app.get('/api/instagram/locations/search', function(req, res){
    if (req.query.lat != '' && req.query.lng != '' && req.query.access_token != ''){
      var COUNT = req.query.count || 10,
          DISTANCE = req.query.distance || 500;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, doc){
          assert.equal(null, tokenErr);

          var username = doc.username,
              password = doc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                return [session, Client.Location.search(session, {
                  lat: req.query.lat,
                  lng: req.query.lng,
                  distance: DISTANCE
                })]
            })
            .spread(function(session, locations) {
              var plainLocations = [];

              COUNT = (COUNT > locations.length)? locations.length : COUNT;

              for (var i = 0; i < COUNT; i++) {
                plainLocations.push(locations[i]._params);
              }

              res.json({
                meta: {
                  code: 200
                },
                data: plainLocations
              })
          	})
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

          db.close();
        })
      })
    }
  })

  app.get('/api/instagram/tags/search', function(req, res){
    if (req.query.q != '' && req.query.access_token != ''){
      var COUNT = req.query.count || 10;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, doc){
          assert.equal(null, tokenErr);

          var username = doc.username,
              password = doc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                return [session, Client.Hashtag.search(session, req.query.q)]
            })
            .spread(function(session, hashtags) {
              var plainHashtags = [];

              COUNT = (COUNT > hashtags.length)? hashtags.length : COUNT;

              for (var i = 0; i < COUNT; i++) {
                plainHashtags.push(hashtags[i]._params);
              }

              res.json({
                meta: {
                  code: 200
                },
                data: plainHashtags
              })
          	})
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

          db.close();
        })
      })
    }
  })

  app.get('/api/instagram/users/search', function(req, res){
    if (req.query.q != '' && req.query.access_token != ''){
      var COUNT = req.query.count || 10;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, doc){
          assert.equal(null, tokenErr);

          var username = doc.username,
              password = doc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
                return [session, Client.Account.search(session, req.query.q)]
            })
            .spread(function(session, accounts) {
              var plainAccounts = [];

              COUNT = (COUNT > accounts.length)? accounts.length : COUNT;

              for (var i = 0; i < COUNT; i++) {
                plainAccounts.push(accounts[i]._params);
              }

              res.json({
                meta: {
                  code: 200
                },
                data: plainAccounts
              })
          	})
            .catch(function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

          db.close();
        })
      })
    }
  })

  app.get('/api/instagram/users', function(req, res){
    if (req.query.access_token != ''){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('tokens').findOne({access_token: req.query.access_token}, function(tokenErr, doc){
          assert.equal(null, tokenErr);

          var username = doc.username,
              password = doc.password,
              device = new Client.Device(username),
              storage = new Client.CookieMemoryStorage();

          Client.Session.create(device, storage, username, password)
            .then(function(session) {
              session.getAccount()
                .then(function(account) {
                  res.json({
                    meta: {
                      code: 200
                    },
                    data: account.params
                  })
                })
                .catch(function(error){
                  res.json({
                    meta: {
                      code: 700,
                      error_type: error.name,
                      error_message: error.message
                    }
                  })
                })
            })
            .catch(Client.Exceptions.AuthenticationError, function(error){
              res.json({
                meta: {
                  code: 700,
                  error_type: error.name,
                  error_message: error.message
                }
              })
            })

          db.close();
        })
      })
    }
  })
}
