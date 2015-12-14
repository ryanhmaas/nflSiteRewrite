var path = require('path');
module.exports = function(app) {

    // frontend routes =========================================================
    // route to handle all angular requests

    app.get('/schedule.json', function(req, res){
        res.sendFile(path.resolve('./schedule.json'))
    });

    app.get('/standings.json', function(req, res){
        res.sendFile(path.resolve('./standings.json'))
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });



};
