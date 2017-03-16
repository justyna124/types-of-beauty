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
            templateUrl: 'home/home.html'
        });

        $routeProvider.when('/spring', {
            templateUrl: 'spring/spring.html'
        });

        $routeProvider.when('/summer', {
            templateUrl: 'summer/summer.html'
        });

        $routeProvider.when('/autumn', {
            templateUrl: 'autumn/autumn.html'
        });

        $routeProvider.when('/winter', {
            templateUrl: 'winter/winter.html'
        });

        $routeProvider.otherwise({redirectTo: '/'});
    }

    angular.module('app').config(config);
})();
