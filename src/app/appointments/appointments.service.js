angular.module('barbershop.appointments')
    .service('appointmentsService', function ($http, clock) {
        return {

            listForToday: function () {
                return this.list({date: clock.today()});
            },

            list: function (params) {
                return $http.get('/api/appointments', {params: params})
                    .then(function (response) {
                        return response.data;
                    })
            }
        };
    });
