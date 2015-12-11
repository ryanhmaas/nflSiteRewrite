angular.module('StandingsCtrl', ['ngMaterial'])
  .controller('StandingsController', ['$scope', '$http', function($scope, $http){
    $http.get('standings.json').success(function(data) {
      $scope.standings = data;
    });
  }]);
