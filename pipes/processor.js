var os = require('os');

var kue = require('kue'),
    jobs = kue.createQueue();

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert')
var ObjectID = require('mongodb').ObjectID

let connectionUrl = 'mongodb://localhost:27017/gem-follow'
let GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

let comments = [
  'Your work is awesome!!', 'It\'s really wonderful', 'Magnificent✨', 'great shot!😉', 'Excellent', 'Graceful👌🏻', 'Gorgeous!', 'I got mad',
  'Remarkable', 'Lovely💙', 'I really liked it😍😍', 'Wow!!', 'It\'s really awesome👍🏻', 'So good!', 'Very nice💪🏻', 'Awesome', 'Wonderful',
  'Stunning💫' , 'Impressive💥⚡️', 'Dreadful', 'Terrific Work😉', 'Brilliant😦', 'Elegant👌🏻', 'Imposing!', 'Superb!👍🏻', 'Supreme!'
];

function followerCoefficient(followersDifference){
  if (followersDifference <= 2000){
    return 3.5;
  }else if (followersDifference > 2000 && followersDifference <= 5000){
    return 5.5;
  }else if (followersDifference > 5000 && followersDifference <= 10000){
    return 7.5;
  }else if (followersDifference > 10000 && followersDifference <= 15000){
    return 9.5;
  }else if (followersDifference > 15000 && followersDifference <= 25000){
    return 11.5;
  }else if (followersDifference > 25000 && followersDifference <= 35000){
    return 13.5;
  }else{
    return 15.5;
  }
}

function periodCoefficient(defaultMonth){
  var basePrice;

  switch (defaultMonth) {
    case 1:
      basePrice = 1.5;
      break;
    case 3:
      basePrice = 3.5;
      break;
    case 6:
      basePrice = 5.5;
      break;
    case 12:
      basePrice = 7.5;
      break;
    case 24:
      basePrice = 9.5;
      break;
  }

  return basePrice;
}

function getValidRecentMedia(medias){
  var resultMedias = [];

  if (medias.length > 0){
    resultMedias.push(medias[0]);
    /*if (medias.length > 3){
      resultMedias.push(medias[medias.length - 1]);
      resultMedias.push(medias[medias.length - 2]);
      resultMedias.push(medias[medias.length - 3]);
    }else {
      for (var i = 0; i < medias.length; i++) {
        resultMedias.push(medias[i]);
      }
    }*/

    return resultMedias;
  }else{
    throw 'You should have at least one media.';
  }
}

function getValidHashtags(hashtags){
  var resultHashtags = [];

  if (hashtags.length > 0){
    resultHashtags.push(hashtags.randomChild());
    /*if (hashtags.length > 3){
      resultHashtags.push(medias[hashtags.length - 1]);
      resultHashtags.push(medias[hashtags.length - 2]);
      resultHashtags.push(medias[hashtags.length - 3]);
    }else {
      for (var i = 0; i < hashtags.length; i++) {
        resultHashtags.push(hashtags[i]);
      }
    }*/

    return resultHashtags;
  }else{
    throw 'You should have at least one hashtag.';
  }
}

function getValidLocations(locations){
  var resultLocations = [];

  if (locations.length > 0){
    resultLocations = locations;
    /*if (locations.length > 3){
      resultLocations.push(medias[locations.length - 1]);
      resultLocations.push(medias[locations.length - 2]);
      resultLocations.push(medias[locations.length - 3]);
    }else {
      for (var i = 0; i < locations.length; i++) {
        resultLocations.push(locations[i]);
      }
    }*/

    return resultLocations;
  }else{
    throw 'You should have at least one location.';
  }
}

Array.prototype.inArray = function(comparer) {
    for(var i=0; i < this.length; i++) {
        if (comparer(this[i])) return true;
    }
    return false;
};

Array.prototype.pushIfNotExist = function(element, comparer) {
    if (!this.inArray(comparer)) {
        this.push(element);

        return true;
    }else{
      return false;
    }
};

Array.prototype.randomChild = function(){
  if (this.length > 0){
    var low = 0,
        high = this.length,
        randomIndex = Math.floor((Math.random() * high) + low);

    return this[randomIndex];
  }else{
    return false;
  }
};

module.exports = function(app){
  var gemJobs = [];

  var hostname = os.hostname();

  if (hostname != 'dv244.bestforweb.net'){
    hostname = 'http://gemfollow.net';
  }else{
    hostname = 'http://gemfollow.net';
  }

  function newJob(options){
      var job = jobs.create('Gem Job', options);

      job.on('failed', function (){
        var today = new Date(),
            issue = {
              error: job.data.name + 'has failed.',
              job_id: job.id,
              created_at: today.toISOString(),
              modified_at: today.toISOString()
            };

        request.post({
          url: hostname + '/issues/' + job.id + today.getTime(),
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
      })
      .removeOnComplete(true)
      .save();
  }

  jobs.process('Gem Job', function (job, done){
    switch (job.data.type) {
      case 'Instagram':
        var instagram_processor = require('./processor/instagram-processor')(app, job, hostname, comments);
        break;
    }

     done && done();
  });


  setInterval(function(){
    MongoClient.connect(connectionUrl, function(err, db){
      assert.equal(null, err);

      db.collection('services').find({gained: null, "payment.content.paid": true}).toArray(function(err, docs){
        assert.equal(null, err);

        docs.forEach(function(doc){
          var today = (new Date()).getTime(),
              targetPeriod = (new Date(doc.target.period)).getTime(),
              targetFollowers = doc.target.followers;

          var serviceHasBeenInserted = gemJobs.pushIfNotExist(doc, function(e) {
              return e._id === doc._id;
          });

          if (serviceHasBeenInserted){
            var launchDensityInSeconds = 0,
                targetPeriod = (new Date(doc.target.period)).getTime(),
                createdAt = (new Date(doc.created_at)).getTime(),
                periodDifference = targetPeriod - createdAt,
                defaultMonth = periodDifference / (1000 * 60 * 60 * 24 * 30);

            launchDensityInSeconds = (periodCoefficient(defaultMonth) + followerCoefficient(doc.target.followers)) * 60 * 1000;
            doc.launch_density_in_seconds = launchDensityInSeconds;

            newJob(doc);
          }
        })

        db.close();
      })
    })
  }, 3000)

  kue.app.listen(1320);
}
