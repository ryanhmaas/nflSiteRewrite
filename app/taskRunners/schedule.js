module.exports = {
  runScraper: function(){
    var request        = require('request');
    var cheerio        = require('cheerio');
    var fs             = require('fs');
    request('http://www.pro-football-reference.com/years/2015/games.htm', function(error, response, html){
        if(!error && response.statusCode == 200){
          var $ = cheerio.load(html);
          var jsonArr = [];
          var weekArr = [];

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

            winnerLogo = getTeamLogo(winner);
            loserLogo =  getTeamLogo(loser);

            var gameData = {
              week: week,
              date: date,
              winner: winner,
              loser: loser,
              winnerScore: winnerScore,
              loserScore: loserScore,
              winnerLogo: winnerLogo,
              loserLogo: loserLogo
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

            visitorLogo = getTeamLogo(visitor);
            homeLogo =  getTeamLogo(home);
            var gameData = {
              week: week,
              date: date,
              visitor: visitor,
              home: home,
              visitorLogo: visitorLogo,
              homeLogo: homeLogo
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


function getTeamLogo(team){
  var logo;
  switch(team){
    case "Arizona Cardinals":
      logo = "img/AZ.svg";
      break;
    case "Atlanta Falcons":
      logo = "img/ATL.svg";
      break;
    case "Baltimore Ravens":
      logo = "img/BAL.svg";
      break;
    case "Buffalo Bills":
      logo = "img/BUF.svg";
      break;
    case "Carolina Panthers":
      logo = "img/CAR.svg";
      break;
    case "Chicago Bears":
      logo = "img/CHI.svg";
      break;
    case "Cincinnati Bengals":
      logo = "img/CIN.svg";
      break;
    case "Cleveland Browns":
      logo = "img/CLE.svg";
      break;
    case "Dallas Cowboys":
      logo = "img/DAL.svg";
      break;
    case "Denver Broncos":
      logo = "img/DEN.svg";
      break;
    case "Detroit Lions":
      logo = "img/DET.svg";
      break;
    case "Green Bay Packers":
      logo = "img/GB.svg";
      break;
    case "Houston Texans":
      logo = "img/HOU.svg";
      break;
    case "Indianapolis Colts":
      logo = "img/IND.svg";
      break;
    case "Jacksonville Jaguars":
      logo = "img/JAX.svg";
      break;
    case "Kansas City Chiefs":
      logo = "img/KC.svg";
      break;
    case "Miami Dolphins":
      logo = "img/MIA.svg";
      break;
    case "Minnesota Vikings":
      logo = "img/MIN.svg";
      break;
    case "New England Patriots":
      logo = "img/NE.svg";
      break;
    case "New Orleans Saints":
      logo = "img/NO.svg";
      break;
    case "New York Giants":
      logo = "img/NYG.svg";
      break;
    case "New York Jets":
      logo = "img/NYJ.svg";
      break;
    case "Oakland Raiders":
      logo = "img/OAK.svg";
      break;
    case "Philadelphia Eagles":
      logo = "img/PHI.svg";
      break;
    case "Pittsburgh Steelers":
      logo = "img/PIT.svg";
      break;
    case "San Diego Chargers":
      logo = "img/SD.svg";
      break;
    case "Seattle Seahawks":
      logo = "img/SEA.svg";
      break;
    case "San Francisco 49ers":
      logo = "img/SF.svg";
      break;
    case "St. Louis Rams":
      logo = "img/STL.svg";
      break;
    case "Tampa Bay Buccaneers":
      logo = "img/TB.svg";
      break;
    case "Tennessee Titans":
      logo = "img/TEN.svg";
      break;
    case "Washington Redskins":
      logo = "img/WAS.svg";
      break;
  }
  return logo;
}
