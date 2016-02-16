angular.module('barbershop.appointments')
    .controller('AppointmentsController', function(appointmentsList) {
        var vm = this;
        vm.list = appointmentsList;

    });
