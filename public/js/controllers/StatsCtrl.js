var app = angular.module('StatsCtrl', ['ngMaterial', 'ui.bootstrap']);
app.controller('StatsController', function($scope){


  $scope.getTeamFullTeamOffenseStats = function(){
    $http.get('offensestats.json').success(function(data){
      $scope.offenseStats = data;
    });
  }

  $scope.getTeamFullTeamDefenseStats = function(){
    $http.get('defenseStats.json').success(function(data){
      $scope.defenseStats = data;
    });
  }

});
