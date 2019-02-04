var request = require('request');

module.exports = function(app, _port){
  app.get('/*', function (req, res, next) {
    if ((req.url.indexOf("/img/") === 0 || req.url.indexOf("/images/") === 0) || (req.url.indexOf("/stylesheet/") === 0 || req.url.indexOf("/css/") === 0) || (req.url.indexOf("/javascript/") === 0 || req.url.indexOf("/js/") === 0)) {
      res.setHeader("Cache-Control", "public, max-age=2592000");
      res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
    }

    next();
  });

  var account_authorization = require('./routes/account-authorization')(app, _port);

  var profile_operation = require('./routes/profile-operation')(app, _port);

  var single_view = require('./routes/single-view')(app, _port);

  var subscriber_operation = require('./routes/subscriber-operation')(app, _port);

  var local_apis = require('./routes/local-apis')(app, _port);
}
