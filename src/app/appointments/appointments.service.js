angular.module('barbershop.appointments')
    .service('appointmentsService', function ($http, $rootScope) {
        return {
            list(){
                return $http.get('/api/appointments')
                    .then(response => response.data);
            },
            create(appointment){
                $http.post('/api/appointments', appointment)
                    .then((response) => {
                        $rootScope.$broadcast('appointmentCreated', response.data);
                    });
            }
        }
    });
