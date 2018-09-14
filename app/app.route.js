(function ()
{
    'use strict';
    function config($routeProvider, $locationProvider)
    {

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: true, requireBase: false
        });

        $routeProvider.when('/', {
            templateUrl: './app/home/home.html'
        });

        $routeProvider.when('/spring', {
            templateUrl: './app/spring/spring.html'
        });

        $routeProvider.when('/summer', {
            templateUrl: './app/summer/summer.html'
        });

        $routeProvider.when('/autumn', {
            templateUrl: './app/autumn/autumn.html'
        });

        $routeProvider.when('/winter', {
            templateUrl: './app/winter/winter.html'
        });
        $routeProvider.when('/color-test', {
            templateUrl: './app/color-test/color-test.html',
            controller: 'TestController',
            controllerAs: 'testCtrl'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }

    angular.module('app').config(config);
})();
