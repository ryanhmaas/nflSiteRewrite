angular.module('MainCtrl', []).controller('MainController', function($scope, $mdSidenav) {
	$scope.cards = [
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' },
    {text: 'Bla bla bla bla bla bla bla ',
     title: 'Bla' }
  ];

  	$scope.displayContent = true;
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  	$scope.toggleContent = function(showContent) { $scope.displayContent = showContent; };
});
