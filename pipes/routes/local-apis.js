var request = require('request');

module.exports = function(app, _port){
  var instagram_api = require('./local-apis/instagram-api')(app, _port);
}
