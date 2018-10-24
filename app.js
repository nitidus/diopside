var compression = require('compression')
var express = require('express')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var bodyParser = require('body-parser')

var app = express()

var connectionUrl = 'mongodb://localhost:27017/gem-follow'
var GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

const _PORT = process.env.PORT || 3000;

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
app.use(compression())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/vendors/', express.static('public'))
app.use('/libs/', express.static('modules'))

var gem = require('./pipes/gem')(app);

var routes = require('./pipes/routes')(app);
var controllers = require('./pipes/controllers')(app);

var processor = require('./pipes/processor')(app);

app.listen(_PORT, function(){
  console.log(`Gem Follow is running on port ${_PORT}.`);
})
