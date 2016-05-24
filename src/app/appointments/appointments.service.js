angular.module('barbershop.appointments')
    .service('appointmentsService', function ($http) {
        return {
            getAppointments : function () {
                return $http.get('/api/appointments')
                    .then(function (response) {
                        return response.data;
                    });
            }
        }
    });
