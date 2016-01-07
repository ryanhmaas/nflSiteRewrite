//import and require necessary modules
module.exports = {
  updateData: function(){
    var request           = require('request');
    var cheerio           = require('cheerio');
    var fs                = require('fs');
    var file              = "mydb.db";
    var exists            = fs.existsSync(file);

    var sqlite3           = require('sqlite3').verbose();
    var db                = new sqlite3.Database(file);

    request('http://www.pro-football-reference.com/years/2015/games.htm', function(error, response, html){
        if(!error && response.statusCode == 200){
          var $ = cheerio.load(html);
          var jsonArr = [];


          var curWeek = -1;
          $('#games tbody tr').each(function(i, element){
            var week = parseInt($(element).children($('td')).eq(0).text());
            if(week > curWeek){
              curWeek = week;
            }
          });

          //get done games
          $('#games tbody tr').not('.thead').each(function(i, element){

            //first td
            var week = $(element).children($('td')).eq(0).text();
            var winner = $(element).children($('td')).eq(4).text();
            var loser = $(element).children($('td')).eq(6).text();
            var winnerScore = $(element).children($('td')).eq(7).text();
            var loserScore = $(element).children($('td')).eq(8).text();

            var date = $(element).children($('td')).eq(1).text() + ', ' +  $(element).children($('td')).eq(2).text();

            if(winnerScore == "" || loserScore == ""){
              winnerScore = "To be determined.";
              loserScore = "To be determined";
            }

            isCurWeek = isInCurrentWeek(week, curWeek);

            var gameData = {
              week: week,
              date: date,
              winner: winner,
              loser: loser,
              winnerScore: winnerScore,
              loserScore: loserScore,
              isCurWeek: isCurWeek
            }
            jsonArr.push(gameData);
          });


          //get future games
          $('#games_left tbody tr').not('.thead').each(function(i, element){
            //first td
            var week = $(element).children($('td')).eq(0).text();
            var visitor = $(element).children($('td')).eq(3).text();
            var home = $(element).children($('td')).eq(5).text();
            var time = $(element).children($('td')).eq(8).text();
            var date = $(element).children($('td')).eq(1).text() + ', ' +  $(element).children($('td')).eq(2).text() + ', ' + $(element).children('td').eq(6).text();

            var gameData = {
              week: week,
              date: date,
              visitor: visitor,
              home: home
            }
            jsonArr.push(gameData);
          });

         var generatedId = 105214894;
         var identicalRecord = false;
         db.serialize(function(){

           //check existing records
            db.each('SELECT * from games', function(err, rows){

            });

            var stmt = db.prepare('INSERT INTO games(game_id, winner_score, loser_score, game_date)VALUES(?, ?,?,?)');
            for(var i=0;i<jsonArr.length;i++){
              var game = jsonArr[i];
              stmt.run(generatedId, game.winnerScore, game.loserScore, game.date);
              generatedId++;
            }//end for loop
            stmt.finalize();
          });//end serialize
      }
    });
  }
}


//get standings
/*request('http://www.cbssports.com/nfl/standings', function(error, response, html){
    if(!error && response.statusCode == 200){
      var $ = cheerio.load(html);
      var jsonArr = [];

      //get done games
      $('.stacked tr').not('.label').each(function(i, element){

        //first td
        var team = $(element).children($('td')).children($('a')).html();
        var division = getDivision(team);
        var wins = $(element).children($('td')).eq(1).text();
        var losses = $(element).children($('td')).eq(2).text();
        var gameData = {
          team: team,
          division: division,
          wins: wins,
          losses: losses
        }
        jsonArr.push(gameData);
      });

      fs.writeFile('standings.json', JSON.stringify(jsonArr, null, 4), function(err){
        console.log('Standings was written properly ;) ');
      });
    }
});
*/

function isInCurrentWeek(teamWeek, currentWeek){
  if(teamWeek < currentWeek){
    return false;
  }
  else if(teamWeek == currentWeek){
    return true;
  }
  else{
    throw new UserException("This is impossible");
  }
}
