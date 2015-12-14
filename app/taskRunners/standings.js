
module.exports = {
  runScraper: function(){
    var request        = require('request');
    var cheerio        = require('cheerio');
    var fs             = require('fs');
    request('http://www.nfl.com/standings', function(error, response, html){
        if(!error && response.statusCode == 200){
          var $ = cheerio.load(html);
          var jsonArr = [];

          //get done games
          $('.data stacked tbody tr').not('.label').each(function(i, element){

            //first td
            var team = $(element).children($('td a')).text();


            division = getDivision(team);

            var gameData = {
              team: team
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
      case "Arizona Cardinals":
        division = "NFC West";
        break;
      case "Atlanta Falcons":
        division = "NFC South";
        break;
      case "Baltimore Ravens":
        division = "AFC North";
        break;
      case "Buffalo Bills":
        division = "AFC East";
        break;
      case "Carolina Panthers":
        division = "NFC South";
        break;
      case "Chicago Bears":
        division = "NFC North";
        break;
      case "Cincinnati Bengals":
        division = "AFC North";
        break;
      case "Cleveland Browns":
        division = "AFC North";
        break;
      case "Dallas Cowboys":
        division = "NFC East";
        break;
      case "Denver Broncos":
        division = "AFC West";
        break;
      case "Detroit Lions":
        division = "NFC North";
        break;
      case "Green Bay Packers":
        division = "NFC North";
        break;
      case "Houston Texans":
        division = "AFC South";
        break;
      case "Indianapolis Colts":
        division = "AFC South";
        break;
      case "Jacksonville Jaguars":
        division = "AFC South";
        break;
      case "Kansas City Chiefs":
        division = "AFC West";
        break;
      case "Miami Dolphins":
        division = "AFC East";
        break;
      case "Minnesota Vikings":
        division = "NFC North";
        break;
      case "New England Patriots":
        division = "AFC East";
        break;
      case "New Orleans Saints":
        division = "NFC South";
        break;
      case "New York Giants":
        division = "NFC East";
        break;
      case "New York Jets":
        division = "AFC East";
        break;
      case "Oakland Raiders":
        division = "AFC West";
        break;
      case "Philadelphia Eagles":
        division = "NFC East";
        break;
      case "Pittsburgh Steelers":
        division = "AFC North";
        break;
      case "San Diego Chargers":
        division = "AFC West";
        break;
      case "Seattle Seahawks":
        division = "NFC West";
        break;
      case "San Francisco 49ers":
        division = "NFC West";
        break;
      case "St. Louis Rams":
        division = "NFC West";
        break;
      case "Tampa Bay Buccaneers":
        division = "NFC South";
        break;
      case "Tennessee Titans":
        division = "AFC South";
        break;
      case "Washington Redskins":
        division = "NFC East";
        break;
    }
    return division;
}
