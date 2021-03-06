//server.js
var express           = require('express');
var app               = express();
var bodyParser        = require('body-parser');
var methodOverride    = require('method-override');
var CronJob           = require('cron').CronJob;
var scheduleScraper   = require('./app/taskRunners/schedule');
var standingsScraper  = require('./app/taskRunners/standings');
var dataUpdater       = require('./app/taskRunners/dataUpdate');


// set our port
var port = process.env.PORT || 8080;

// connect to our mongoDB database
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


//update our data
dataUpdater.updateData();

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);


//run scrapers
//scheduleScraper.runScraper();
//standingsScraper.runScraper();



// expose app
exports = module.exports = app;
