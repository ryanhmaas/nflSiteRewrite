angular.module('MainCtrl', ['ngMaterial', 'ngMdIcons'])

.controller('MainController', ['$scope','$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
    $scope.menu = [
    {
      link : '/contact',
      title: 'Schedule',
			class : 'sidenav-item-link',
      icon: 'fa fa-calendar'
    },
    {
      link : '/contact',
      title: 'Standings',
			class: 'sidenav-item-link',
      icon: 'fa fa-list-alt'
    },
    {
      link : '/contact',
      title: 'Stats',
			class: 'sidenav-item-link',
      icon: 'fa fa-line-chart'
    }
  ];
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
}]);
