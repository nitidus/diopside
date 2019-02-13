var compression = require('compression')
var express = require('express')
var cookieParser = require('cookie-parser')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)
var bodyParser = require('body-parser')
var http = require('http')

var app = express()

var connectionUrl = 'mongodb://localhost:27017/gem-follow'
var GEM_KEY = "$2a$08$8kGpKAcmDOsZtz5la65ywuGmpbNEaYeNBv.eNfQ/2jd9OzIRq34u."

var httpServer = http.createServer(app);

const _PORT = process.env.PORT || 8080;

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

var gem = require('./pipes/gem')(app, _PORT);

var routes = require('./pipes/routes')(app, _PORT);
var controllers = require('./pipes/controllers')(app, _PORT);

var processor = require('./pipes/processor')(app, _PORT);

httpServer.listen(_PORT, function(){
  console.log(`Gem Follow is running on port ${_PORT}.`);
})
