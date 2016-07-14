angular.module('barbershop.appointments')
    .component('addAppointment', {
        templateUrl : 'app/appointments/add-appointment/add-appointment.html',

        controllerAs : 'addAppointment',
        controller : function (appointmentsService) {
            var vm = this;

            vm.create = function () {
                appointmentsService.create(vm.details);
            };
        }
    });
