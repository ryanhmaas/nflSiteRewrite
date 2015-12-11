//Angular Routes
angular.module('appRoutes', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

      // home page
      .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
      })

      .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactController'
      })

      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleController'
      })

      .when('/standings', {
        templateUrl: 'views/standings.html',
        controller: 'StandingsController'
      });
  $locationProvider.html5Mode(true);
}]);
