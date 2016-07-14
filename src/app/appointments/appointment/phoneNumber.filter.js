angular.module('barbershop.appointments')
    .filter('phoneNumber', function () {
        return function (input) {
            return input;
        };
    });
