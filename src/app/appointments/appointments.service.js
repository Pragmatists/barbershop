angular.module('barbershop.appointments')
    .service('appointmentsService', function ($http) {
        var appointments = [];

        return {
            add: function (appointment) {
                appointments.push(appointment)
            },
            getAppointments: function () {
                return $http.get('/api/appointments')
                    .then(function (response) {
                        return response.data;
                    });
            }
        }
    });
