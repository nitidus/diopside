var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, service, hostname, comments){
  var locations = service.content,
      selected_location = locations.randomChild();

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
          content: selected_location
        }
      };

      request.get({
        url: hostname + '/api/instagram/locations/search?lat=' + selected_location.data.latitude + '&lng=' + selected_location.data.longitude + '&distance=750&access_token=' + service.access_token,
        headers: {
          'Cache-Control':'no-cache'
        }
      },
      function (locationErr, locationRes, locationBody){
        locationBody = JSON.parse(locationBody);

        if (locationBody.meta.code == 200){
          var fetchedLocations = locationBody.data,
              bestDiagnosedLocation = {
                index: -1,
                weight: 0
              };

          try {
            fetchedLocations = getValidLocations(fetchedLocations);

            for (var i = 0; i < fetchedLocations.length; i++) {
              var indexedFetchedLocation = fetchedLocations[i].title.split(', '),
                  bestLocalDiagnosedLocation = {
                    index: -1,
                    weight: 0
                  };

              for (var j = 0; j < indexedFetchedLocation.length; j++) {
                var hasLocationAnyKeyword = selected_location.text.search(indexedFetchedLocation[j]);

                if (hasLocationAnyKeyword != -1){
                  bestLocalDiagnosedLocation.index = i;
                  bestLocalDiagnosedLocation.weight++;
                }
              }

              if (bestLocalDiagnosedLocation.weight > bestDiagnosedLocation.weight){
                bestDiagnosedLocation.index = bestLocalDiagnosedLocation.index;
                bestDiagnosedLocation.weight = bestLocalDiagnosedLocation.weight;
              }
            }

            var selectedFetchedLocation = (bestDiagnosedLocation.index > -1) ?fetchedLocations[bestDiagnosedLocation.index] : fetchedLocations.randomChild();

            request.get({
              url: hostname + '/api/instagram/locations/' + selectedFetchedLocation.id + '/media/recent?access_token=' + service.access_token,
              headers: {
                'Cache-Control':'no-cache'
              }
            },
            function (locationMediaErr, locationMediaRes, locationMediaBody){
              locationMediaBody = JSON.parse(locationMediaBody);

              if (locationMediaBody.meta.code == 200){
                var recentMedia = locationMediaBody.data;

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
                                  content: selected_location
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
                                      content: selected_location
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
                                          content: selected_location
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
                                              content: selected_location
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
                            content: selected_location
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
                      error: locationMediaBody.meta,
                      user_id: _id,
                      media: {
                        _id: recentMedia[i].id,
                        user_id: recentMedia[i].owner.id
                      },
                      service: {
                        type: 'Instagram',
                        micro_service: {
                          type: service.name,
                          content: selected_location
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
          } catch (e) {
            var today = new Date(),
                issue = {
                  error: e,
                  user_id: _id,
                  service: {
                    type: 'Instagram',
                    micro_service: {
                      type: service.name,
                      content: selected_location
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
                error: locationBody.meta,
                user_id: _id,
                service: {
                  type: 'Instagram',
                  micro_service: {
                    type: service.name,
                    content: selected_location
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
}
