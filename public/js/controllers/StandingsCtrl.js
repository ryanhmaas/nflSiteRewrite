var app = angular.module('StandingsCtrl', ['ngMaterial', 'smart-table', 'ui.bootstrap']);
app.controller('StandingsController', function($scope, $http){
    $http.get('standings.json').success(function(data) {
      $scope.standings = data;
  });
  $scope.headers = [
    {
      name: 'Team',
      field: 'team'
    },{
      name:'Wins',
      field: 'wins'
    },{
      name: 'Losses',
      field: 'Losses'
    }
  ];
});
