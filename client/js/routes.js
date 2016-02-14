angular.module('app')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/messages', {
                templateUrl: 'views/messages.html',
                controller: 'MessagesController as msg'
            })
            .otherwise({
                templateUrl: 'views/home.html',
                controller: 'HomeController as home'
            });

        $locationProvider.html5Mode(true);

}]);