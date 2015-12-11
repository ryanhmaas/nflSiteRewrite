module.exports = {
  runScraper: function(){
    var request        = require('request');
    var cheerio        = require('cheerio');
    var fs             = require('fs');
    request('http://www.pro-football-reference.com/years/2015/games.htm', function(error, response, html){
        if(!error && response.statusCode == 200){
          var $ = cheerio.load(html);
          var jsonArr = [];
          $('#games tbody tr').not('.thead').each(function(i, element){

            //first td
            var week = $(element).children($('td')).eq(0).text();
            var winner = $(element).children($('td')).eq(4).text();
            var loser = $(element).children($('td')).eq(6).text();
            var winnerScore = $(element).children($('td')).eq(7).text();
            var loserScore = $(element).children($('td')).eq(8).text();
            var gameData = {
              week: week,
              winner: winner,
              loser: loser,
              winnerScore: winnerScore,
              loserScore: loserScore
            }
            jsonArr.push(gameData);
          });
          fs.writeFile('schedule.json', JSON.stringify(jsonArr, null, 4), function(err){
            console.log('Schedule was written properly ;) ');
          });
        }
    });

  }
}
