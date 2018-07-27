var ejs = require('ejs')
var bcrypt = require('bcrypt-nodejs')
var crypto = require('crypto')
var request = require('request')
var nodemailer = require('nodemailer')
var ZarinpalCheckout = require('zarinpal-checkout');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

let transporter = nodemailer.createTransport({
    host: 'mail.gemfollow.net',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'service@gemfollow.net',
        pass: 'QeOtLqfzR8Su'
    }
})

module.exports = function(app){
  app.get('/services/:user_id', function(req, res){
    if (req.params.user_id != ''){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('services').aggregate([
            {
              "$match": {
                user_id: new ObjectID(req.params.user_id)
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

          if (docs != null){
            res.json({
              meta: {
                code: 200
              },
              data: docs
            });
          }else{
            res.json({
              meta: {
                code: 700,
                error_type: 'BadRequestException',
                error_message: 'The service was not found!'
              }
            });
          }

          db.close();
        })
      })
    }else{
      res.json({
        meta: {
          code: 700,
          error_type: 'BadRequestException',
          error_message: 'The service was not found!'
        }
      });
    }
  })

  app.get('/services/:grouping_by/:user_id', function(req, res){
    if (req.params.grouping_by != '' && req.params.user_id != ''){
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        var COUNT = parseInt(req.query.count) || 5;

        var services = {
          inprogress: [],
          completed: []
        };

        switch (req.params.grouping_by) {
          case 'grouped':
            db.collection('services')
            .aggregate([
                {
                  "$match": {
                    user_id: new ObjectID(req.params.user_id),
                    completed: null
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
            .limit(COUNT).toArray(function(err, docs){
              assert.equal(null, err);

              if (docs != null){
                services.inprogress = docs;

                db.collection('services')
                .aggregate([
                    {
                      "$match": {
                        user_id: new ObjectID(req.params.user_id),
                        completed: true
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
                .limit(COUNT).toArray(function(err, docs){
                  assert.equal(null, err);

                  if (docs != null){
                    services.completed = docs;

                    res.json({
                      meta: {
                        code: 200
                      },
                      data: services
                    });
                  }else{
                    res.json({
                      meta: {
                        code: 700,
                        error_type: 'BadRequestException',
                        error_message: 'The service was not found!'
                      }
                    });
                  }

                  db.close();
                })
              }else{
                res.json({
                  meta: {
                    code: 700,
                    error_type: 'BadRequestException',
                    error_message: 'The service was not found!'
                  }
                });
              }

              db.close();
            })
            break;
          default:
          db.collection('services')
          .aggregate([
              {
                "$match": {
                  user_id: new ObjectID(req.params.user_id)
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
          .limit(COUNT).toArray(function(err, docs){
            assert.equal(null, err);

            if (docs != null){
              res.json({
                meta: {
                  code: 200
                },
                data: docs
              });
            }else{
              res.json({
                meta: {
                  code: 700,
                  error_type: 'BadRequestException',
                  error_message: 'The service was not found!'
                }
              });
            }

            db.close();
          })
        }
      })
    }else{
      res.json({
        meta: {
          code: 700,
          error_type: 'BadRequestException',
          error_message: 'The service was not found!'
        }
      });
    }
  });

  app.post('/payment/:token', function(req, res){
    switch (req.body.gateway) {
      case 'Zarinpal':
      var merchantId = 'b68edb8c-6608-11e7-a841-000c295eb8fc',
            zarinpal = ZarinpalCheckout.create(merchantId, false);

        zarinpal.PaymentRequest({
          Amount: (req.body.price * 3200).toString(),
          CallbackURL: req.body.callback_url,
          Description: req.body.description,
          Email: req.session.currentUser.email
        }).then(response => {
          if (response.status === 100) {
            res.json({
              meta: {
                code: 200
              },
              data: response
            })
          }
        }).catch(err => {
          res.json({
            meta: {
              code: 605,
              error_type: 'PaymentException',
              error_message: 'Your payment url could not be created!'
            }
          })
        });
        break;
      case 'Wallet':
        var hostname = req.protocol + '://' + req.get('host');

        request(hostname + '/users/' + req.session.currentUser._id,
        function (getBalanceErr, getBalanceRes, getBalanceBody){
          var service = JSON.parse(req.cookies.service),
              currentUserDetailsRes = JSON.parse(getBalanceRes.body),
              currentUserDetails = currentUserDetailsRes.data;

          if (service.price.total <= currentUserDetails.balance){
            var walletAuthority = (bcrypt.hashSync(((new Date()).getTime()).toString(16))).replace(/\//g, '$');

            res.json({
              meta: {
                code: 200
              },
              data: {
                authority: walletAuthority,
                url: req.body.callback_url + '?authority=' + walletAuthority + '&Status=OK'
              }
            })
          }else{
            res.json({
              meta: {
                code: 605,
                error_type: 'PaymentException',
                error_message: 'The service price is higher than your available balance in your wallet!'
              }
            })
          }
        })
        break;
    }
  })

  app.get('/verify/:hash', function(req, res){
    if (req.session.currentUser){
      res.redirect('profile')
    }else{
      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('users').findOne({confirmation: {code: req.params.hash, confirmed: false}}, function(err, doc){
          if (doc != null){
            db.collection('users').updateOne(
              {
                confirmation: {
                  code: req.params.hash,
                  confirmed: false
                }
              },
              {
                 $set: {
                   confirmation: {
                     code: req.params.hash,
                     confirmed: true
                   }
                 }
              },
              function(err, doc){
                assert.equal(null, err);
                assert.equal(1, doc.matchedCount);
                assert.equal(1, doc.modifiedCount);

                res.render('join', {auth: 'verify', data: {
                    meta: {
                      code: 200
                    },
                    data: doc
                  }
                })

                db.close();
              }
            );
          }else{
            res.render('join', {auth: 'verify', data: {
                meta: {
                  code: 602,
                  error_type: 'OAuthException',
                  error_message: 'Your requested code (' + req.params.hash + ') was not exist!'
                },
                data: doc
              }
            })

            db.close();
          }
        })
      })
    }
  })

  app.get('/clear', function(req, res){
    req.session.destroy()
  })

  app.get('/session/services/', function(req, res){
    var services = req.session.services;
    res.json(services)
  })

  app.get('/cookies/service/', function(req, res){
    var service = JSON.parse(req.cookies.service);
    res.json(service)
  })

  app.get('/profile/payment/:mode/:authority/:status', function(req, res){
    if (req.session.currentUser){
      switch (req.params.mode) {
        case 'service':
          if (req.session.services){
            var lastService = req.session.services[req.session.services.length - 1];

            if (req.params.authority == lastService.payment.content.authority){
              lastService.user_id = new ObjectID(req.session.currentUser._id);

              if (!lastService.payment.content.paid){
                if (req.params.status == 'succeeded'){
                  lastService.payment.content.paid = true;
                }else{
                  lastService.payment.content.paid = false;
                }

                req.session.services[req.session.services.length - 1] = lastService;
                req.session.save();
              }

              MongoClient.connect(connectionUrl, function(err, db){
                assert.equal(null, err);

                if (lastService.payment.gateway == 'Wallet'){
                  var credit = {
                    payment: lastService.payment,
                    created_at: (new Date()).toISOString(),
                    user_id: new ObjectID(req.session.currentUser._id)
                  };

                  credit.payment.content.price = lastService.price.total;

                  var hostname = req.protocol + '://' + req.get('host');

                  request(hostname + '/users/' + req.session.currentUser._id,
                  function (getBalanceErr, getBalanceRes, getBalanceBody){
                    var requestedUser = JSON.parse(getBalanceRes.body);

                    requestedUser = requestedUser.data;

                    credit.balance = {
                      previous: requestedUser.balance,
                      new: requestedUser.balance - credit.payment.content.price
                    };

                    db.collection('credits').insertOne(credit, function(err, doc){
                      assert.equal(null, err);
                      assert.equal(1, doc.insertedCount);

                      db.collection('users').updateOne(
                        {
                           _id: credit.user_id
                        },
                        {
                           $set: { balance: credit.balance.new }
                        },
                        function(err, doc){
                          assert.equal(null, err);
                          assert.equal(1, doc.matchedCount);
                          assert.equal(1, doc.modifiedCount);

                          db.collection('services').insertOne(lastService, function(err, doc){
                            assert.equal(null, err);
                            assert.equal(1, doc.insertedCount);

                            if (req.session.services.length > 1){
                              delete req.session.services[req.session.services.length - 1];
                            }else{
                              delete req.session.services;
                            }

                            switch (lastService.type) {
                              case 'Instagram':
                              db.collection('tokens').updateOne(
                                {
                                   access_token: lastService.owner.access_token
                                },
                                {
                                   $set: { isVerified: true }
                                },
                                function(err, doc){
                                  assert.equal(null, err);
                                  assert.equal(1, doc.matchedCount);
                                  assert.equal(1, doc.modifiedCount);

                                  db.close();
                                })
                                break;
                            }

                            req.session.save();

                            res.redirect('/profile/accounts')

                            db.close();
                          })

                          db.close();
                        })

                        db.close();
                    })
                  })
                }else{
                  db.collection('services').insertOne(lastService, function(err, doc){
                    assert.equal(null, err);
                    assert.equal(1, doc.insertedCount);

                    if (req.session.services.length > 1){
                      delete req.session.services[req.session.services.length - 1];
                    }else{
                      delete req.session.services;
                    }

                    req.session.save();

                    res.redirect('/profile/accounts')

                    db.close();
                  })
                }
              })
            }
          }else{
            res.redirect('/profile/accounts/new')
          }
          break;
        case 'credit':
          if (req.session.credit){
            var credit = req.session.credit;

            if (req.params.authority == credit.payment.content.authority){
              credit.user_id = new ObjectID(req.session.currentUser._id);

              if (!credit.payment.content.paid){
                if (req.params.status == 'succeeded'){
                  credit.payment.content.paid = true;
                }else{
                  credit.payment.content.paid = false;
                }

                req.session.credit = credit;
                req.session.save();
              }

              MongoClient.connect(connectionUrl, function(err, db){
                assert.equal(null, err);

                var hostname = req.protocol + '://' + req.get('host');

                request(hostname + '/users/' + req.session.currentUser._id,
                function (getBalanceErr, getBalanceRes, getBalanceBody){
                  var requestedUser = JSON.parse(getBalanceRes.body);

                  requestedUser = requestedUser.data;

                  if (typeof requestedUser.balance != 'undefined'){
                    credit.balance = {
                      previous: requestedUser.balance,
                      new: requestedUser.balance + credit.payment.content.price
                    };
                  }else{
                    credit.balance = {
                      new: credit.payment.content.price
                    }
                  }

                  req.session.credit = credit;
                  req.session.save();

                  db.collection('credits').insertOne(credit, function(err, doc){
                    assert.equal(null, err);
                    assert.equal(1, doc.insertedCount);

                    if (doc.payment.content.paid == true){
                      db.collection('users').updateOne(
                        {
                           _id: credit.user_id
                        },
                        {
                           $set: { balance: requestedUser.balance.new }
                        },
                        function(err, doc){
                          assert.equal(null, err);
                          assert.equal(1, doc.matchedCount);
                          assert.equal(1, doc.modifiedCount);

                          res.redirect('/profile/wallet')

                          db.close();
                        })
                    }
                  })
                })
              })
            }
          }else{
            res.redirect('/profile/wallet')
          }
          break;
      }
    }else{
      res.redirect('/login')
    }
  })

  app.post('/session/credit/:token', function(req, res){
    req.session.credit = req.body;

    req.session.save();
    res.json(req.session.credit)
  })

  app.post('/session/service/:token', function(req, res){
    if (req.session.authorized){
      delete req.session.authorized;
    }

    if (!req.session.services){
      req.session.services = [req.body];
    }else{
      req.session.services.push(req.body);
    }

    req.session.save();
    res.json(req.session.services)
  })

  app.get('/schedules/:serviceid', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('schedules').find({service_id: new ObjectID(req.params.serviceid)}).toArray(function(err, docs){
        assert.equal(null, err);

        if (docs != null){
          res.json({
            meta: {
              code: 200
            },
            data: docs
          });
        }else{
          res.json({
            meta: {
              code: 700,
              error_type: 'BadRequestException',
              error_message: 'The service was not found!'
            }
          });
        }

        db.close();
      })
    })
  });

  app.get('/reveal/tokens/:username', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('tokens').findOne({username: req.params.username}, function(err, doc){
        if (doc != null){
          res.json({
            meta: {
              code: 200
            },
            data: doc
          });
        }else{
          res.json({
            meta: {
              code: 700,
              error_type: 'BadRequestException',
              error_message: 'The token was not found!'
            }
          });
        }

        db.close();
      })
    })
  });

  app.get('/tokens/:tokenid', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('tokens').findOne({access_token: req.params.tokenid}, function(err, doc){
        if (doc != null){
          res.json({
            meta: {
              code: 200
            },
            data: doc
          });
        }else{
          res.json({
            meta: {
              code: 700,
              error_type: 'BadRequestException',
              error_message: 'The token was not found!'
            }
          });
        }

        db.close();
      })
    })
  });

  app.put('/services/:serviceid', function(req, res){
    var serviceId = req.body._id;

    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      delete req.body._id;

      if (req.params.serviceid == serviceId){
        db.collection('services').updateOne(
          {
             _id: new ObjectID(serviceId)
          },
          {
             $set: req.body
          },
          function(err, doc){
            assert.equal(null, err);
            assert.equal(1, doc.matchedCount);
            assert.equal(1, doc.modifiedCount);

            res.json({
              meta: {
                code: 200
              },
              data: doc
            });

            db.close();
          }
        );
      }else{
        res.json({
          meta: {
            code: 700,
            error_type: 'BadRequestException',
            error_message: 'The service was not found!'
          }
        });
      }
    })
  });

  app.put('/schedule/:scheduleid/set', function(req, res){
    var scheduleId = req.body._id;

    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      delete req.body._id;

      if (req.params.scheduleid == scheduleId){
        db.collection('schedules').updateOne(
          {
             _id: new ObjectID(scheduleId)
          },
          {
             $set: req.body
          },
          function(err, doc){
            assert.equal(null, err);
            assert.equal(1, doc.matchedCount);
            assert.equal(1, doc.modifiedCount);

            res.json({
              meta: {
                code: 200
              },
              data: doc
            });

            db.close();
          }
        );
      }else{
        res.json({
          meta: {
            code: 700,
            error_type: 'BadRequestException',
            error_message: 'The service was not found!'
          }
        });
      }
    })
  });

  app.post('/issues/:hashid', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      var _id = '';

      if (typeof req.body.user_id != 'undefined'){
        _id = req.body.user_id;
        req.body.user_id = new ObjectID(req.body.user_id);
      }
      if (typeof req.body.service_id != 'undefined'){
        _id = req.body.service_id;
        req.body.service_id = new ObjectID(req.body.service_id);
      }
      if (typeof req.body.job_id != 'undefined'){
        _id = req.body.job_id;
        req.body.job_id = new ObjectID(req.body.job_id);
      }

      if (req.params.hashid == _id){
        db.collection('issues').insertOne(req.body, function(err, doc){
          assert.equal(null, err);
          assert.equal(1, doc.insertedCount);

          res.json({
            meta: {
              code: 200
            },
            data: doc
          });

          db.close();
        })
      }else{
        res.json({
          meta: {
            code: 700,
            error_type: 'BadRequestException',
            error_message: 'The issue was not found!'
          }
        });
      }
    })
  });

  app.get('/analysis/:user_id/:service_id', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('analysis').find({user_id: new ObjectID(req.params.user_id), "service._id": new ObjectID(req.params.service_id)}).sort({_id: -1}).toArray(function(err, docs){
        assert.equal(null, err);

        res.json({
          meta: {
            code: 200
          },
          data: docs
        });

        db.close();
      })
    })
  })

  app.get('/analysis/:user_id', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('analysis').find({user_id: new ObjectID(req.params.user_id)}).sort({_id: -1}).toArray(function(err, docs){
        assert.equal(null, err);

        res.json({
          meta: {
            code: 200
          },
          data: docs
        });

        db.close();
      })
    })
  })

  app.post('/analysis/:userid', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      if (req.params.userid == req.body.user_id){
        req.body.user_id = new ObjectID(req.body.user_id);
        req.body.service._id = new ObjectID(req.body.service._id);

        db.collection('analysis').insertOne(req.body, function(err, doc){
          assert.equal(null, err);
          assert.equal(1, doc.insertedCount);

          res.json({
            meta: {
              code: 200
            },
            data: doc
          });

          db.close();
        })
      }else{
        res.json({
          meta: {
            code: 700,
            error_type: 'BadRequestException',
            error_message: 'The hashed token was not found!'
          }
        });
      }
    })
  });

  app.post('/schedule/:serviceid/set', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      if (req.params.serviceid == req.body.service_id){
        req.body.service_id = new ObjectID(req.body.service_id);

        db.collection('schedules').insertOne(req.body, function(err, doc){
          assert.equal(null, err);
          assert.equal(1, doc.insertedCount);

          res.json({
            meta: {
              code: 200
            },
            data: doc
          });

          db.close();
        })
      }else{
        res.json({
          meta: {
            code: 700,
            error_type: 'BadRequestException',
            error_message: 'The service was not found!'
          }
        });
      }
    })
  });

  app.post('/users', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);
      var cipher = crypto.createCipher('aes192', req.body.password)
      var crypted = cipher.update('', 'utf8', 'hex')
          crypted += cipher.final('hex')

      req.body.password = crypted

      db.collection('users').findOne({email: req.body.email}, function(err, checkDocs){
        if (checkDocs === null){
          db.collection('users').insertOne(req.body, function(err, doc){
            assert.equal(null, err);
            assert.equal(1, doc.insertedCount);

            var hostname = req.protocol + '://' + req.get('host');

            var confirmationMailHTMLContent = '<div style="margin: 0; background-color: #f9f9f9; padding: 0 40px 30px 40px; border-bottom: 6px solid #5b0bbb; color: #040404;">' +
                   '<div style="display: block; padding: 30px; box-sizing: border-box; text-align: center; font-weight: 600; font-size: 1.7rem;">Gem Follow</div>' +
                   '<div style="background-color: #fff; padding: 40px; border-radius: 10px;">' +
                      '<h3 style="color: #5b0bbb; font-size: 1.5rem; display: block; text-align: center;">Confirm your email with the following code</h3>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Thank you for signing up for Gem Follow. We\'re happy you\'re here!</p>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Enter the following code in the window where you began creating your new Gem Follow account:</p>' +
                      '<div style="display: block; text-align: center; padding: 20px 0 30px 0;">' +
                        '<a href="' + hostname + '/verify/' + req.body.confirmation.code + '" style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif !important; text-align: center; font-size: 28px; line-height: 56px; font-weight: normal; text-decoration: none; background-color: #5b0bbb; background-image: linear-gradient(to right,#df0eff, #5b0bbb); color: #fff; padding: 10px 45px; display: inline-block; border-radius: 6px;" target="_blank">Verify Now</a>' +
                      '</div>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">This email contains private information about your accounts &mdash; please do not forward. If you have any questions, email us at <a style="color: #439fe0; font-weight: bold; text-decoration: none; word-break: break-word;" href="mailto:service@gemfollow.net" target="_blank">service@gemfollow.net</a>.</p>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Cheers,<br /> The team at Gem Follow</p>' +
                   '</div>' +
                   '<div style="padding: 40px; display: block; text-align: center;"><span style="display: inline-block; margin-right: 8px;">Made by <a style="color: #439fe0; text-decoration: none; word-break: break-word;" href="http://gemfollow.net/" target="_blank">Gem Follow, Inc</a></span>&bull; <span style="display: inline-block; margin-left: 3px;"><a style="color: #439fe0; text-decoration: none; word-break: break-word;" href="http://gemfollow.net/blog" target="_blank">Our' + 'blog</a></span></div>' +
                '</div>';

            var mailOpts = {
              from: '"Gem Follow" <service@gemfollow.net>',
              to: req.body.email,
              subject: 'Confirmation Code for Gem Follow: ' + req.body.confirmation.code,
              html: confirmationMailHTMLContent
            };

            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

            transporter.sendMail(mailOpts, (error, info) => {
                if (error) {
                    res.json({
                      meta: {
                        code: 601,
                        error_type: 'OAuthException',
                        error_message: 'Confirmation email was not send!'
                      }
                    });
                }

                process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

                res.json({
                  meta: {
                    code: 200
                  },
                  data: {
                    info: info,
                    content: doc
                  }
                });
            });

            db.close();
          })
        }else{
          res.json({
            meta: {
              code: 600,
              error_type: 'OAuthException',
              error_message: 'Email already in use!'
            }
          })

          db.close();
        }
      })
    })
  })

  app.post('/users/auth/', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);
      var cipher = crypto.createCipher('aes192', req.body.password)
      var crypted = cipher.update('', 'utf8', 'hex')
          crypted += cipher.final('hex')

      req.body.password = crypted

      db.collection('users').findOne({email: req.body.email, password: req.body.password}, function(err, doc){
        assert.equal(null, err);

        if (doc != null){
          if (doc.confirmation.confirmed){
            if (req.body.remember){
              req.session.cookie.expires = new Date(Date.now() + (1000 * 60 * 60))
            }

            req.session.currentUser = doc;

            res.json({
              meta: {
                code: 200
              },
              data: doc
            });
          }else{
            res.json({
              meta: {
                code: 604,
                error_type: 'OAuthException',
                error_message: 'Your email was not verified, Please check your email!'
              },
              data: doc
            });
          }

        }else{
          res.json({
            meta: {
              code: 603,
              error_type: 'OAuthException',
              error_message: 'Your email or password was incorrect!'
            },
            data: doc
          });
        }

        db.close();
      })
    })
  })

  app.get('/logout', function(req, res){
    delete req.session.currentUser;
    req.session.save();

    res.redirect('/login')
  })

  app.get('/users', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('users').find({isGem: null}).toArray(function(err, docs){
        assert.equal(null, err);

        res.json({
          meta: {
            code: 200
          },
          data: docs
        })

        db.close();
      })
    })
  })

  app.get('/invoices/:id', function(req, res){
    if (req.session.currentUser && req.params.id == req.session.currentUser._id){
      var currentUserId = req.session.currentUser._id;

      MongoClient.connect(connectionUrl, function(err, db){
        assert.equal(null, err);

        db.collection('services').find({user_id: new ObjectID(currentUserId)}).toArray(function(err, docs){
          assert.equal(null, err);

          res.json({
            meta: {
              code: 200
            },
            data: docs
          })

          db.close();
        })
      })
    }else{
      res.redirect('/login')
    }
  })

  app.get('/credits/:userid', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('credits').find({user_id: new ObjectID(req.params.userid)}).toArray(function(err, docs){
        assert.equal(null, err);

        res.json({
          meta: {
            code: 200
          },
          data: docs
        })

        db.close();
      })
    })
  })

  app.get('/users/:id', function(req, res){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('users').findOne({_id: new ObjectID(req.params.id)}, function(err, doc){
        assert.equal(null, err);

        res.json({
          meta: {
            code: 200
          },
          data: doc
        })

        db.close();
      })
    })
  })

  app.put('/users', function(req, res){
    var userId = req.body._id;

    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      delete req.body._id;

      var account = req.body;

      db.collection('users').updateOne(
        {
           _id: new ObjectID(userId)
        },
        {
           $set: account
        },
        function(err, doc){
          assert.equal(null, err);
          assert.equal(1, doc.matchedCount);
          assert.equal(1, doc.modifiedCount);

          if (typeof account.confirmation != 'undefined'){
            var hostname = req.protocol + '://' + req.get('host'),
                confirmationMailHTMLContent = '<div style="margin: 0; background-color: #f9f9f9; padding: 0 40px 30px 40px; border-bottom: 6px solid #5b0bbb; color: #040404;">' +
                   '<div style="display: block; padding: 30px; box-sizing: border-box; text-align: center; font-weight: 600; font-size: 1.7rem;">Gem Follow</div>' +
                   '<div style="background-color: #fff; padding: 40px; border-radius: 10px;">' +
                      '<h3 style="color: #5b0bbb; font-size: 1.5rem; display: block; text-align: center;">Confirm your email with the following code</h3>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Thank you for signing up for Gem Follow. We\'re happy you\'re here!</p>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Enter the following code in the window where you began creating your new Gem Follow account:</p>' +
                      '<div style="display: block; text-align: center; padding: 20px 0 30px 0;">' +
                        '<a href="' + hostname + '/verify/' + account.confirmation.code + '" style="font-family: \'Helvetica Neue\', Helvetica, Arial, sans-serif !important; text-align: center; font-size: 28px; line-height: 56px; font-weight: normal; text-decoration: none; background-color: #5b0bbb; background-image: linear-gradient(to right,#df0eff, #5b0bbb); color: #fff; padding: 10px 45px; display: inline-block; border-radius: 6px;" target="_blank">Verify Now</a>' +
                      '</div>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">This email contains private information about your accounts &mdash; please do not forward. If you have any questions, email us at <a style="color: #439fe0; font-weight: bold; text-decoration: none; word-break: break-word;" href="mailto:service@gemfollow.net" target="_blank">service@gemfollow.net</a>.</p>' +
                      '<p style="font-size: 15px; line-height: 24px; margin: 0 0 16px;">Cheers,<br /> The team at Gem Follow</p>' +
                   '</div>' +
                   '<div style="padding: 40px; display: block; text-align: center;"><span style="display: inline-block; margin-right: 8px;">Made by <a style="color: #439fe0; text-decoration: none; word-break: break-word;" href="http://gemfollow.net/" target="_blank">Gem Follow, Inc</a></span>&bull; <span style="display: inline-block; margin-left: 3px;"><a style="color: #439fe0; text-decoration: none; word-break: break-word;" href="http://gemfollow.net/blog" target="_blank">Our' + 'blog</a></span></div>' +
                '</div>';

            var mailOpts = {
              from: '"Gem Follow" <service@gemfollow.net>',
              to: req.body.email,
              subject: 'Confirmation Code for Gem Follow: ' + account.confirmation.code,
              html: confirmationMailHTMLContent
            };

            process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

            transporter.sendMail(mailOpts, (error, info) => {
                if (error) {
                    res.json({
                      meta: {
                        code: 601,
                        error_type: 'OAuthException',
                        error_message: 'Confirmation email was not send!'
                      }
                    });
                }

                process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

                res.json({
                  meta: {
                    code: 200
                  },
                  data: {
                    info: info,
                    content: doc
                  }
                });
            });
          }else{
            res.json({
              meta: {
                code: 200
              },
              data: doc
            });
          }

          db.close();
        }
      );
    })
  })

  app.put('/users/password', function(req, res){
    var userId = req.body._id;

    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);
      var cipher = crypto.createCipher('aes192', req.body.password)
      var crypted = cipher.update('', 'utf8', 'hex')
          crypted += cipher.final('hex')

      req.body.password = crypted

      delete req.body._id;

      var account = req.body;
      req.session.currentUser = account;

      db.collection('users').updateOne(
        {
           _id: new ObjectID(userId)
        },
        {
           $set: account
        },
        function(err, doc){
          assert.equal(null, err);
          assert.equal(1, doc.matchedCount);
          assert.equal(1, doc.modifiedCount);

          res.json({
            meta: {
              code: 200
            },
            data: doc
          });

          db.close();
        }
      );
    })
  })
}
