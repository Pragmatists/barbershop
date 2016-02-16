angular.module('barbershop.appointments')
    .service('appointmentsService', function ($q) {
        var appointments = [];

        return {
            add: function (appointment) {
                appointments.push(appointment)
            },
            getAppointments: function () {
                return $q.when(appointments);
            }
        }
    });
