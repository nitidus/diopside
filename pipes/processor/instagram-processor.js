module.exports = function(app, job, hostname, comments){
  var micro_services = ['hashtags', 'locations', 'periods'],
      selected_service_id = job.data._id,
      selected_micro_service_name = micro_services.randomChild(),
      selected_micro_service = job.data.micro_services[selected_micro_service_name],
      selected_micro_service_access_token = job.data.owner.access_token;

  var instagram_post_scheduler_processor = require('./instagram-processor/scheduler-processor')(app, {
    _id: selected_service_id,
    access_token: selected_micro_service_access_token
  },
  hostname,
  job);

  var launch_density_seconds_timer = setInterval(function(){
    var today = new Date(),
        targetPeriod = new Date(job.data.target.period);

    if (today.getTime() <= targetPeriod.getTime()){
      switch (selected_micro_service_name) {
        case 'hashtags':
          var instagram_hashtags_processor = require('./instagram-processor/hashtags-processor')(app, {
            _id: selected_service_id,
            name: selected_micro_service_name,
            content: selected_micro_service,
            access_token: selected_micro_service_access_token
          },
          hostname,
          comments);
          break;
        case 'locations':
          var instagram_locations_processor = require('./instagram-processor/locations-processor')(app, {
            _id: selected_service_id,
            name: selected_micro_service_name,
            content: selected_micro_service,
            access_token: selected_micro_service_access_token
          },
          hostname,
          comments);
          break;
        case 'periods':
          var instagram_periods_processor = require('./instagram-processor/periods-processor')(app, {
            _id: selected_service_id,
            name: selected_micro_service_name,
            content: selected_micro_service,
            access_token: selected_micro_service_access_token
          },
          hostname,
          comments);
          break;
      }
    }else{
      var instagram_conclusions_processor = require('./instagram-processor/conclusions-processor')(app, {
        _id: selected_service_id
      },
      hostname);

      clearInterval(launch_density_seconds_timer);
    }
  }, job.data.launch_density_in_seconds);
}
