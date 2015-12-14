angular.module('ScheduleCtrl', ['ngMaterial'])
  .controller('ScheduleController', function($scope, $http){
    $http.get('schedule.json').success(function(data) {
      $scope.schedule = data;
    });
    $scope.weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  });
