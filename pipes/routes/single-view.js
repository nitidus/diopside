var os = require('os');

var request = require('request');

var CONSTANTS = require('./constants');

module.exports = function(app){
  var hostname = os.hostname();

  if (hostname != 'dv244.bestforweb.net'){
    hostname = 'http://gemfollow.net';
  }else{
    hostname = 'http://gemfollow.net';
  }

  app.get('/', function(req, res){
    request.get({
      url: hostname + '/reveal/tokens/gemflw'
    },
    function (gemTokenErr, gemTokenRes, gemTokenBody){
      gemTokenBody = JSON.parse(gemTokenBody);

      if (gemTokenBody.meta.code == 200){
        request.get({
          url: hostname + '/users/' + gemTokenBody.data.user_id,
          headers: {
            'Cache-Control':'no-cache'
          }
        },
        function (gemErr, gemRes, gemBody){
          gemBody = JSON.parse(gemBody);

          if (gemBody.meta.code == 200){
            var gem = gemBody.data;

            if (req.session.currentUser){
              res.render('index', {currentUser: req.session.currentUser, gem: gem, constants: CONSTANTS})
            }else{
              res.render('index', {currentUser: '', gem: gem, constants: CONSTANTS})
            }
          }
        })
      }
    })
  })

  app.get('/terms', function(req, res){
    res.render('terms')
  })

  app.get('/privacy', function(req, res){
    res.render('privacy')
  })
}
