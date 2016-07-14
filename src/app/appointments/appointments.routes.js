angular.module('barbershop.appointments')
    .config(function ($stateProvider) {

        $stateProvider.state('appointments', {
            url: '/appointments',
            parent: 'app',
            template : '<appointments></appointments>'
        });
    });
