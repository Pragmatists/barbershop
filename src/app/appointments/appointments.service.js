angular.module('barbershop.appointments')
    .service('appointmentsService', function ($q) {
        var list = [
            {client : 'John'},
            {client : 'Jimmy'},
            {client : 'Jane'}
        ];
        return {
            list(){
                return $q.resolve(list);
            },
            create(appointment){
                list.push(appointment);
            }
        }
    });
