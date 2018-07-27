var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, service, hostname, comments){
  var hashtags = service.content,
      selected_hashtag = hashtags.randomChild();

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
              content: selected_hashtag
            }
          };

          switch (selected_hashtag.type) {
            case 'hashtag':
              request.get({
                url: hostname + '/api/instagram/tags/' + selected_hashtag.text + '/media/recent?access_token=' + service.access_token,
                headers: {
                  'Cache-Control':'no-cache'
                }
              },
              function (hashtagErr, hashtagRes, hashtagBody){
                hashtagBody = JSON.parse(hashtagBody);

                if (hashtagBody.meta.code == 200){
                  var recentMedia = hashtagBody.data;

                  try {
                    recentMedia = getValidRecentMedia(recentMedia);

                    for (var i = 0; i < recentMedia.length; i++) {
                      var selected_comment = comments.randomChild();

                      request.post({
                        url: hostname + '/api/instagram/users/follow',
                        headers: {
                          'Cache-Control': 'no-cache'
                        },
                        form: {
                          username: recentMedia[i].owner.username,
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
                                  _id: recentMedia[i].id,
                                  user_id: recentMedia[i].owner.id
                                },
                                service: {
                                  type: 'Instagram',
                                  micro_service: {
                                    type: service.name,
                                    content: selected_hashtag
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
                        }else {
                          analysis.media = {
                            _id: recentMedia[i].id,
                            user_id: recentMedia[i].owner.id
                          };

                          request.post({
                            url: hostname + '/api/instagram/media/' + recentMedia[i].id + '/likes',
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
                                      _id: recentMedia[i].id,
                                      user_id: recentMedia[i].owner.id
                                    },
                                    service: {
                                      type: 'Instagram',
                                      micro_service: {
                                        type: service.name,
                                        content: selected_hashtag
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
                                url: hostname + '/api/instagram/media/' + recentMedia[i].id + '/comments',
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
                                          _id: recentMedia[i].id,
                                          user_id: recentMedia[i].owner.id
                                        },
                                        service: {
                                          type: 'Instagram',
                                          micro_service: {
                                            type: service.name,
                                            content: selected_hashtag
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
                                              _id: recentMedia[i].id,
                                              user_id: recentMedia[i].owner.id
                                            },
                                            service: {
                                              type: 'Instagram',
                                              micro_service: {
                                                type: service.name,
                                                content: selected_hashtag
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
                          media: {
                            _id: recentMedia[i].id,
                            user_id: recentMedia[i].owner.id
                          },
                          service: {
                            type: 'Instagram',
                            micro_service: {
                              type: service.name,
                              content: selected_hashtag
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
                        media: {
                          _id: recentMedia[i].id,
                          user_id: recentMedia[i].owner.id
                        },
                        service: {
                          type: 'Instagram',
                          micro_service: {
                            type: service.name,
                            content: selected_hashtag
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
              break;

            case 'mention':
              request.get({
                url: hostname + '/api/instagram/users/search?q=' + selected_hashtag.text + '&count=1&access_token=' + service.access_token,
                headers: {
                  'Cache-Control':'no-cache'
                }
              },
              function (userErr, userRes, userBody){
                if (userBody.meta.code == 200){
                  userBody.data = userBody.data[0];

                  request.post({
                    url: hostname + '/api/instagram/users/follow',
                    headers: {
                      'Cache-Control': 'no-cache'
                    },
                    form: {
                      username: selected_hashtag.text,
                      access_token: service.access_token
                    },
                  },
                  function (mentionFollowErr, mentionFollowResponse, mentionFollowBody){
                    if (mediaFollowErr){
                      var today = new Date(),
                          issue = {
                            error: mediaFollowErr,
                            user_id: _id,
                            media: {
                              _id: recentMedia[i].id,
                              user_id: recentMedia[i].owner.id
                            },
                            service: {
                              type: 'Instagram',
                              micro_service: {
                                type: service.name,
                                content: selected_hashtag
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
                        _id: recentMedia[i].id,
                        user_id: recentMedia[i].owner.id
                      };

                      request.get({
                        url: hostname + '/api/instagram/users/' + userBody.data.id + '/media/recent?access_token=' + service.access_token,
                        headers: {
                          'Cache-Control':'no-cache'
                        }
                      },
                      function (mentionErr, mentionRes, mentionBody){
                        mentionBody = JSON.parse(hashtagBody);

                        if (mentionBody.meta.code == 200){
                          var recentMedia = mentionBody.data;

                          try {
                            recentMedia = getValidRecentMedia(recentMedia);

                            for (var i = 0; i < recentMedia.length; i++) {
                              request.post({
                                url: hostname + '/api/instagram/media/' + recentMedia[i].id + '/likes',
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
                                          _id: recentMedia[i].id,
                                          user_id: recentMedia[i].owner.id
                                        },
                                        service: {
                                          type: 'Instagram',
                                          micro_service: {
                                            type: service.name,
                                            content: selected_hashtag
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
                                    url: hostname + '/api/instagram/media/' + recentMedia[i].id + '/comments',
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
                                              _id: recentMedia[i].id,
                                              user_id: recentMedia[i].owner.id
                                            },
                                            service: {
                                              type: 'Instagram',
                                              micro_service: {
                                                type: service.name,
                                                content: selected_hashtag
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
                                                  _id: recentMedia[i].id,
                                                  user_id: recentMedia[i].owner.id
                                                },
                                                service: {
                                                  type: 'Instagram',
                                                  micro_service: {
                                                    type: service.name,
                                                    content: selected_hashtag
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
                          } catch (e) {
                            var today = new Date(),
                                issue = {
                                  error: e,
                                  user_id: _id,
                                  media: {
                                    _id: recentMedia[i].id,
                                    user_id: recentMedia[i].owner.id
                                  },
                                  service: {
                                    type: 'Instagram',
                                    micro_service: {
                                      type: service.name,
                                      content: selected_hashtag
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
                                media: {
                                  _id: recentMedia[i].id,
                                  user_id: recentMedia[i].owner.id
                                },
                                service: {
                                  type: 'Instagram',
                                  micro_service: {
                                    type: service.name,
                                    content: selected_hashtag
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
                  })
                }else{
                  var today = new Date(),
                      issue = {
                        error: userBody.meta,
                        user_id: _id,
                        media: {
                          _id: recentMedia[i].id,
                          user_id: recentMedia[i].owner.id
                        },
                        service: {
                          type: 'Instagram',
                          micro_service: {
                            type: service.name,
                            content: selected_hashtag
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
              break;
          }
        }
      })
}
