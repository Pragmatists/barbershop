angular.module('barbershop.appointments')
    .service('generateId', function () {
        return {
            generate : function () {
                return (Math.random() * 10000) + '';
            }
        }
    });
