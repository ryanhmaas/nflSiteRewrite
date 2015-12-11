angular.module('ScheduleCtrl', ['ngMaterial'])
  .controller('ScheduleController', function($scope, $http){
    $http.get('schedule.json').success(function(data) {
      $scope.schedule = data;
    });
  });
