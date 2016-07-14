angular.module('barbershop.appointments')
    .component('appointments', {

        templateUrl : 'app/appointments/appointments.html',

        controllerAs : 'appointments',
        controller : function (appointmentsService) {
            var vm = this;

            vm.$onInit = fetchAppointments;

            function fetchAppointments() {
                appointmentsService.list()
                    .then((appointments) => {
                        vm.list = appointments;
                    });
            }

        }
    });
