angular.module('barbershop.appointments')
    .filter('phoneNumber', function () {
        return function (input) {
            if (!input) {
                return input;
            }
            return _(input.toString().split(''))
                .reverse()
                .chunk(3)
                .map(c => [' ', ...c])
                .flatten()
                .tail()
                .reverse()
                .join('');
        };
    });
