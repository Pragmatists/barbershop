angular.module('barbershop.appointments')
    .component('appointment', {
        templateUrl : 'app/appointments/appointment/appointment.html',
        controllerAs : 'appointment',
        bindings : {
            details : '<'
        }

    });
