var express = require('express')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var bodyParser = require('body-parser')

var app = express()

var connectionUrl = 'mongodb://localhost:27017/gem-follow'
var GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('json spaces', 2);

app.use(cookieParser())
app.use(
  session({
    secret: GEM_KEY,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      url: connectionUrl
    })
  })
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/vendors/', express.static('public'))
app.use('/libs/', express.static('modules'))

var gem = require('./pipes/gem')(app);

var routes = require('./pipes/routes')(app);
var routes = require('./pipes/controllers')(app);

var processor = require('./pipes/processor')(app);

app.listen(3000, function(){
  console.log('Gem Follow is running on port 3000!');
})
