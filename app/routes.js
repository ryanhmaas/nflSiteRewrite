var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mydb.db');

module.exports = function(app) {
    /*
    app.get('/schedule.json', function(req, res){
        res.sendFile(path.resolve('./schedule.json'))
    });

    app.get('/standings.json', function(req, res){
        res.sendFile(path.resolve('./standings.json'))
    });
    */

    //get all games
    app.get('/games', function(req, res){
      db.get('Select * from games', function(err, row){
        res.json({
          "game_id" : row.game_id,
          "winner_id" : row.winner_id,
          "loser_id" : row.loser_id,
          "winner_score" : row.winner_score,
          "loser_score" : row.loser_score,
          "game_date" : row.game_date,
        });
      });
    });

    //detail view for a single game
    app.get('/games/:game_id', function(req, res){
      db.get('Select * from games where game_id = ' +  req.params.game_id, function(err, row){
        res.json({
          "game_id" : row.game_id,
          "winner_id" : row.winner_id,
          "loser_id" : row.loser_id,
          "winner_score" : row.winner_score,
          "loser_score" : row.loser_score,
          "game_date" : row.game_date,
        });
      });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
