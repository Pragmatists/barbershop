angular.module('barbershop.appointments')
    .controller('AppointmentsController', function (appointmentsService) {
        var vm = this;

        appointmentsService.getAppointments()
            .then(function (data) {
                vm.list = data;
            });

        vm.add = function () {
            appointmentsService.addAppointment(vm.newAppointment);
        };
    });
