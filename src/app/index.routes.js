(function () {
    'use strict';

    angular
        .module('barbershop')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'app/app.html'
            })
            .state('home', {
                parent: 'app',
                url: '/',
                templateUrl: 'app/home/home.html'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
