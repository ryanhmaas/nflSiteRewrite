angular.module('ScheduleCtrl', ['ngMaterial', 'angular.filter'])
  .controller('ScheduleController', function($scope, $http){
    $http.get('schedule.json').success(function(data) {
      $scope.schedule = data;
    });
    $scope.weeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

    $scope.options = [
      {
        name: 'One',
        value: '1'
      },
      {
        name: 'Two',
        value: '2'
      },
      {
        name: 'Three',
        value: '3'
      },
      {
        name: 'Four',
        value: '4'
      },
      {
        name: 'Five',
        value: '5'
      },
      {
        name: 'Six',
        value: '6'
      },
      {
        name: 'Seven',
        value: '7'
      },
      {
        name: 'Eight',
        value: '8'
      },
      {
        name: 'Nine',
        value: '9'
      },
      {
        name: 'Ten',
        value: '10'
      },
      {
        name: 'Eleven',
        value: '11'
      },
      {
        name: 'Twelve',
        value: '12'
      },
      {
        name: 'Thirteen',
        value: '13'
      },
      {
        name: 'Fourteen',
        value: '14'
      },
      {
        name: 'Fifteen',
        value: '15'
      },
      {
        name: 'Sixteen',
        value: '16'
      },
      {
        name: 'Seventeen',
        value: '17'
      }
    ];

  });
