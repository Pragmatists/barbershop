angular.module('barbershop.appointments')
    .controller('AppointmentsController', function (appointments) {
        var vm = this;
        vm.list = appointments;

    });
