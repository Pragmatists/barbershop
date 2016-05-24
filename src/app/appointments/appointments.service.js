angular.module('barbershop.appointments')
    .service('appointmentsService', function ($http, generateId) {
        return {
            getAppointments : function () {
                return $http.get('/api/appointments')
                    .then(function (response) {
                        return response.data;
                    });
            },
            addAppointment : function (newAppointment) {
                newAppointment.id = generateId.generate();
                return $http.post('/api/appointments', newAppointment);
            }
        }
    });
