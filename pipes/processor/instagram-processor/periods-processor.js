var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, service, hostname, comments){
  var periods = service.content,
      selected_period = periods.randomChild();

  request.get({
    url: hostname + '/tokens/' + service.access_token,
    headers: {
      'Cache-Control':'no-cache'
    }
  },
  function (tokenErr, tokenRes, tokenBody){
    var token = JSON.parse(tokenBody);

    if (token.meta.code == 200){
      var _id = token.data.user_id,
          analysis = {};

      analysis.user_id = _id;

      analysis.service = {
        _id: service._id,
        type: 'Instagram',
        micro_service: {
          type: service.name,
          content: selected_period
        }
      };

      request.get({
        url: hostname + '/api/instagram/users?access_token=' + service.access_token,
        headers: {
          'Cache-Control':'no-cache'
        }
      },
      function (userDataErr, userDataRes, userDataBody){
        userDataBody = JSON.parse(userDataBody);

        request.get({
          url: hostname + '/api/instagram/users/' + userDataBody.data.id + '/media/recent?access_token=' + service.access_token,
          headers: {
            'Cache-Control':'no-cache'
          }
        },
        function (userMediaErr, userMediaRes, userMediaBody){
          userMediaBody = JSON.parse(userMediaBody);

          if (userMediaBody.meta.code == 200){
            var recentMedia = mentionBody.data;

            try {
              var validHashtags = [];
              //recentMedia = getValidRecentMedia(recentMedia);

              for (var i = 0; i < recentMedia.length; i++) {
                var mediaCaption = recentMedia[i].caption,
                    mediaCaptionHashtags = mediaCaption.match(/#[a-zA-Z0-9_]+/g),
                    mediaTakenAt = new Date(recentMedia[i].takenAt),
                    validMediaTakenAt = mediaTakenAt.getHours() * 60 * 60;

                if (selected_period.data.first <= validMediaTakenAt && selected_period.data.second >= validMediaTakenAt){
                  if (mediaCaptionHashtags.length > 0){
                    validHashtags.concat(mediaCaptionHashtags);
                  }
                }
              }

              try {
                var fetchedHashtags = getValidHashtags(validHashtags);

                for (var j = 0; j < fetchedHashtags.length; j++) {
                  var clearFetchedHashtag = fetchedHashtags[i].replace('#', '');

                  request.get({
                    url: hostname + '/api/instagram/tags/' + clearFetchedHashtag + '/media/recent?access_token=' + service.access_token,
                    headers: {
                      'Cache-Control':'no-cache'
                    }
                  },
                  function (hashtagErr, hashtagRes, hashtagBody){
                    hashtagBody = JSON.parse(hashtagBody);

                    if (hashtagBody.meta.code == 200){
                      var recentForeignMedia = hashtagBody.data;

                      try {
                        recentForeignMedia = getValidRecentMedia(recentForeignMedia);

                        for (var k = 0; k < recentForeignMedia.length; k++) {
                          var selected_comment = comments.randomChild();

                          request.post({
                            url: hostname + '/api/instagram/users/follow',
                            headers: {
                              'Cache-Control': 'no-cache'
                            },
                            form: {
                              username: recentForeignMedia[k].owner.username,
                              access_token: service.access_token
                            },
                          },
                          function (mediaFollowErr, mediaFollowResponse, mediaFollowBody){
                            if (mediaFollowErr){
                              var today = new Date(),
                                  issue = {
                                    error: mediaFollowErr,
                                    user_id: _id,
                                    media: {
                                      _id: recentForeignMedia[i].id,
                                      user_id: recentForeignMedia[i].owner.id
                                    },
                                    service: {
                                      type: 'Instagram',
                                      micro_service: {
                                        type: service.name,
                                        content: selected_period
                                      }
                                    },
                                    created_at: today.toISOString(),
                                    modified_at: today.toISOString()
                                  };

                              request.post({
                                url: hostname + '/issues/' + _id,
                                headers: {
                                  'Cache-Control': 'no-cache'
                                },
                                form: issue
                              },
                              function (issueErr, issueResponse, issueBody){
                                if (issueErr){
                                  //issue insert error occured.
                                  //issueErr | error message
                                }
                              })
                            }else{
                              analysis.media = {
                                _id: recentForeignMedia[i].id,
                                user_id: recentForeignMedia[i].owner.id
                              };

                              request.post({
                                url: hostname + '/api/instagram/media/' + recentForeignMedia[k].id + '/likes',
                                headers: {
                                  'Cache-Control': 'no-cache'
                                },
                                form: {
                                  access_token: service.access_token
                                },
                              },
                              function (mediaLikeErr, mediaLikeResponse, mediaLikeBody){
                                if (mediaLikeErr){
                                  var today = new Date(),
                                      issue = {
                                        error: mediaLikeErr,
                                        user_id: _id,
                                        media: {
                                          _id: recentForeignMedia[i].id,
                                          user_id: recentForeignMedia[i].owner.id
                                        },
                                        service: {
                                          type: 'Instagram',
                                          micro_service: {
                                            type: service.name,
                                            content: selected_period
                                          }
                                        },
                                        created_at: today.toISOString(),
                                        modified_at: today.toISOString()
                                      };

                                  request.post({
                                    url: hostname + '/issues/' + _id,
                                    headers: {
                                      'Cache-Control': 'no-cache'
                                    },
                                    form: issue
                                  },
                                  function (issueErr, issueResponse, issueBody){
                                    if (issueErr){
                                      //issue insert error occured.
                                      //issueErr | error message
                                    }
                                  })
                                }else{
                                  request.post({
                                    url: hostname + '/api/instagram/media/' + recentForeignMedia[i].id + '/comments',
                                    headers: {
                                      'Cache-Control': 'no-cache'
                                    },
                                    form: {
                                      text: selected_comment,
                                      access_token: service.access_token
                                    },
                                  },
                                  function (mediaCommentErr, mediaCommentResponse, mediaCommentBody){
                                    if (mediaCommentErr){
                                      var today = new Date(),
                                          issue = {
                                            error: mediaCommentErr,
                                            user_id: _id,
                                            media: {
                                              _id: recentForeignMedia[i].id,
                                              user_id: recentForeignMedia[i].owner.id
                                            },
                                            service: {
                                              type: 'Instagram',
                                              micro_service: {
                                                type: service.name,
                                                content: selected_period
                                              }
                                            },
                                            created_at: today.toISOString(),
                                            modified_at: today.toISOString()
                                          };

                                      request.post({
                                        url: hostname + '/issues/' + _id,
                                        headers: {
                                          'Cache-Control': 'no-cache'
                                        },
                                        form: issue
                                      },
                                      function (issueErr, issueResponse, issueBody){
                                        if (issueErr){
                                          //issue insert error occured.
                                          //issueErr | error message
                                        }
                                      })
                                    }else{
                                      var today = new Date();

                                      mediaCommentBody = JSON.parse(mediaCommentBody);

                                      analysis.media.comment = {
                                        _id: mediaCommentBody.data.id,
                                        content: selected_comment
                                      };

                                      request.get({
                                        url: hostname + '/api/instagram/users?access_token=' + service.access_token,
                                        headers: {
                                          'Cache-Control': 'no-cache'
                                        }
                                      },
                                      function (userDetailErr, userDetailResponse, userDetailBody){
                                        if (userDetailErr){
                                          var today = new Date(),
                                              issue = {
                                                error: userDetailErr,
                                                user_id: _id,
                                                media: {
                                                  _id: recentForeignMedia[i].id,
                                                  user_id: recentForeignMedia[i].owner.id
                                                },
                                                service: {
                                                  type: 'Instagram',
                                                  micro_service: {
                                                    type: service.name,
                                                    content: selected_period
                                                  }
                                                },
                                                created_at: today.toISOString(),
                                                modified_at: today.toISOString()
                                              };

                                          request.post({
                                            url: hostname + '/issues/' + _id,
                                            headers: {
                                              'Cache-Control': 'no-cache'
                                            },
                                            form: issue
                                          },
                                          function (issueErr, issueResponse, issueBody){
                                            if (issueErr){
                                              //issue insert error occured.
                                              //issueErr | error message
                                            }
                                          })
                                        }else{
                                          userDetailBody = JSON.parse(userDetailBody);

                                          var userDetail = userDetailBody.data;

                                          analysis.gained_follower = userDetail.followerCount;

                                          analysis.created_at = today.toISOString();
                                          analysis.modified_at = today.toISOString();

                                          request.post({
                                            url: hostname + '/analysis/' + _id,
                                            headers: {
                                              'Cache-Control': 'no-cache'
                                            },
                                            form: analysis
                                          },
                                          function (analysisErr, analysisResponse, analysisBody){
                                            if (analysisErr){
                                              //analysis insert error occured.
                                              //analysisErr | error message
                                            }
                                          })
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      } catch (e) {
                        var today = new Date(),
                            issue = {
                              error: e,
                              user_id: _id,
                              service: {
                                type: 'Instagram',
                                micro_service: {
                                  type: service.name,
                                  content: selected_period
                                }
                              },
                              created_at: today.toISOString(),
                              modified_at: today.toISOString()
                            };

                        request.post({
                          url: hostname + '/issues/' + _id,
                          headers: {
                            'Cache-Control': 'no-cache'
                          },
                          form: issue
                        },
                        function (issueErr, issueResponse, issueBody){
                          if (issueErr){
                            //issue insert error occured.
                            //issueErr | error message
                          }
                        })
                      }
                    }else{
                      var today = new Date(),
                          issue = {
                            error: hashtagBody.meta,
                            user_id: _id,
                            service: {
                              type: 'Instagram',
                              micro_service: {
                                type: service.name,
                                content: selected_period
                              }
                            },
                            created_at: today.toISOString(),
                            modified_at: today.toISOString()
                          };

                      request.post({
                        url: hostname + '/issues/' + _id,
                        headers: {
                          'Cache-Control': 'no-cache'
                        },
                        form: issue
                      },
                      function (issueErr, issueResponse, issueBody){
                        if (issueErr){
                          //issue insert error occured.
                          //issueErr | error message
                        }
                      })
                    }
                  })
                }
              } catch (e) {
                var today = new Date(),
                    issue = {
                      error: e,
                      user_id: _id,
                      service: {
                        type: 'Instagram',
                        micro_service: {
                          type: service.name,
                          content: selected_period
                        }
                      },
                      created_at: today.toISOString(),
                      modified_at: today.toISOString()
                    };

                request.post({
                  url: hostname + '/issues/' + _id,
                  headers: {
                    'Cache-Control': 'no-cache'
                  },
                  form: issue
                },
                function (issueErr, issueResponse, issueBody){
                  if (issueErr){
                    //issue insert error occured.
                    //issueErr | error message
                  }
                })
              }
            } catch (e) {
              var today = new Date(),
                  issue = {
                    error: e,
                    user_id: _id,
                    service: {
                      type: 'Instagram',
                      micro_service: {
                        type: service.name,
                        content: selected_period
                      }
                    },
                    created_at: today.toISOString(),
                    modified_at: today.toISOString()
                  };

              request.post({
                url: hostname + '/issues/' + _id,
                headers: {
                  'Cache-Control': 'no-cache'
                },
                form: issue
              },
              function (issueErr, issueResponse, issueBody){
                if (issueErr){
                  //issue insert error occured.
                  //issueErr | error message
                }
              })
            }
          }else{
            var today = new Date(),
                issue = {
                  error: userMediaBody.meta,
                  user_id: _id,
                  service: {
                    type: 'Instagram',
                    micro_service: {
                      type: service.name,
                      content: selected_period
                    }
                  },
                  created_at: today.toISOString(),
                  modified_at: today.toISOString()
                };

            request.post({
              url: hostname + '/issues/' + _id,
              headers: {
                'Cache-Control': 'no-cache'
              },
              form: issue
            },
            function (issueErr, issueResponse, issueBody){
              if (issueErr){
                //issue insert error occured.
                //issueErr | error message
              }
            })
          }
        })
      })
    }
  })
}
