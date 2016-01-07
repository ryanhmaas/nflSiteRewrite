var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mydb.db');

module.exports = function(app) {
    /*
    app.get('/schedule.json', function(req, res){
        res.sendFile(path.resolve('./schedule.json'))
    });

    app.get('/standings.json', function(req, res){
        res.sendFile(path.resolve('./standings.json'))
    });
    */

    var gameArr = [];
    //get all games
    app.get('/games', function(req, res){
      //res.json({"msg": "hey"});
      db.serialize(function(){
        db.each('SELECT * from games', function(err, rows){
          if(err){
            throw err;
          }
          var teamData = {
            game_id: rows.team_id,
            winner_id:rows.team_name,
            loser_id : rows.city,
            winner_score: rows.stadium_name,
            loser_score : rows.loser_score,
            game_date: rows.game_date
          }
          gameArr.push(teamData);
        });
      });
      res.json(gameArr);
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

    /*
    app.get('/teams', function(req, res){
        db.all('Select team_id from teams', function(err, row){
          res.json({
            "team_id" : row.team_id,
            "team_name" : row.team_name,
            "city" : row.city,
            "stadium_name" : row.stadium_name,
            "stadium_capacity" : row.stadium_capacity
          });
        });

    });

  */
    var teamArr = [];
    app.get('/teams', function(req, res){
      //res.json({"msg": "hey"});
      db.serialize(function(){
        db.each('SELECT * from teams', function(err, rows){
          if(err){
            throw err;
          }
          var teamData = {
            team_id: rows.team_id,
            team_name:rows.team_name,
            city : rows.city,
            stadium_name: rows.stadium_name
          }
          teamArr.push(teamData);
        });
      });
      res.json(teamArr);
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
