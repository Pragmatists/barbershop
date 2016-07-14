angular.module('barbershop.appointments')
    .service('appointmentsService', function ($q) {
        return {
            list(){

                return $q.resolve([
                    {client : 'John'},
                    {client : 'Jimmy'},
                    {client : 'Jane'}
                ]);
            }
        }
    });
