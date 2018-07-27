var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, service, hostname){
  var today = new Date(),
      conclusion = {
        service_id: service._id,
        gained: true,
        modified_at: today.toISOString()
      };

  request.put({
    url: hostname + '/services/' + conclusion._id,
    headers: {
      'Cache-Control': 'no-cache'
    },
    form: conclusion
  },
  function (conclusionErr, conclusionResponse, conclusionBody){
    if (conclusionErr){
      var issue = {
            error: conclusionErr,
            service_id: service._id,
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
