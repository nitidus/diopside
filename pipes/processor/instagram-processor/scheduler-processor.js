var request = require('request');

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

module.exports = function(app, service, hostname, job){
  var today = new Date(),
      targetPeriod = new Date(job.data.target.period);

  var launch_scheduler_timer = setInterval(function(){
    if (today.getTime() <= targetPeriod.getTime()){
      var schedule = {
            service_id: service._id,
            access_token: service.access_token
          };

      request.post({
        url: hostname + '/api/instagram/upload',
        headers: {
          'Cache-Control': 'no-cache'
        },
        form: schedule
      },
      function (scheduleErr, scheduleResponse, scheduleBody){
        if (scheduleErr){
          var issue = {
                error: scheduleErr,
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
    }else{
      clearInterval(launch_scheduler_timer);
    }
  }, 1000 * 60 * 10);
}
