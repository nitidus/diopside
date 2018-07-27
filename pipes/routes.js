var request = require('request');

module.exports = function(app){
  var account_authorization = require('./routes/account-authorization')(app);

  var profile_operation = require('./routes/profile-operation')(app);

  var single_view = require('./routes/single-view')(app);

  var subscriber_operation = require('./routes/subscriber-operation')(app);

  var local_apis = require('./routes/local-apis')(app);
}
