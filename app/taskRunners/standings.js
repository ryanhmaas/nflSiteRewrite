
module.exports = {
  runScraper: function(){
    var request        = require('request');
    var cheerio        = require('cheerio');
    var fs             = require('fs');
    request('http://www.cbssports.com/nfl/standings', function(error, response, html){
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

  }
}

function getDivision(team){
    var division;
    switch(team){
      case "Arizona":
        division = "NFC West";
        break;
      case "Atlanta":
        division = "NFC South";
        break;
      case "Baltimore":
        division = "AFC North";
        break;
      case "Buffalo":
        division = "AFC East";
        break;
      case "Carolina":
        division = "NFC South";
        break;
      case "Chicago":
        division = "NFC North";
        break;
      case "Cincinnati":
        division = "AFC North";
        break;
      case "Cleveland":
        division = "AFC North";
        break;
      case "Dallas":
        division = "NFC East";
        break;
      case "Denver":
        division = "AFC West";
        break;
      case "Detroit":
        division = "NFC North";
        break;
      case "Green Bay":
        division = "NFC North";
        break;
      case "Houston":
        division = "AFC South";
        break;
      case "Indianapolis":
        division = "AFC South";
        break;
      case "Jacksonville":
        division = "AFC South";
        break;
      case "Kansas City":
        division = "AFC West";
        break;
      case "Miami":
        division = "AFC East";
        break;
      case "Minnesota":
        division = "NFC North";
        break;
      case "New England":
        division = "AFC East";
        break;
      case "New Orleans":
        division = "NFC South";
        break;
      case "N.Y. Giants":
        division = "NFC East";
        break;
      case "N.Y. Jets":
        division = "AFC East";
        break;
      case "Oakland":
        division = "AFC West";
        break;
      case "Philadelphia":
        division = "NFC East";
        break;
      case "Pittsburgh":
        division = "AFC North";
        break;
      case "San Diego":
        division = "AFC West";
        break;
      case "Seattle":
        division = "NFC West";
        break;
      case "San Francisco":
        division = "NFC West";
        break;
      case "St. Louis":
        division = "NFC West";
        break;
      case "Tampa Bay":
        division = "NFC South";
        break;
      case "Tennessee":
        division = "AFC South";
        break;
      case "Washington":
        division = "NFC East";
        break;
    }
    return division;
}
