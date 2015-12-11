angular.module('ScheduleCtrl', ['ngMaterial'])
  .controller('ScheduleController', ['$scope', '$http', function($scope, $http){
    $http.get('schedule.json').success(function(data) {
      $scope.schedule = data;
    });
  }]);
