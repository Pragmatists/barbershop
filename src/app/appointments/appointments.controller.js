angular.module('barbershop.appointments')
    .controller('AppointmentsController', function(appointmentsService) {
        var vm = this;

        appointmentsService.getAppointments()
            .then(function (appointments) {
                vm.list = appointments;
            })
            .catch(function (error) {
                vm.error = error;
            });

    });
