angular.module('barbershop.appointments')
    .component('appointments', {

        templateUrl : 'app/appointments/appointments.html',

        controllerAs : 'appointments',
        controller : function (appointmentsService, $scope) {
            var vm = this;

            vm.$onInit = fetchAppointments;

            $scope.$on('appointmentCreated', fetchAppointments);
            
            function fetchAppointments() {
                appointmentsService.list()
                    .then((appointments) => {
                        vm.list = appointments;
                    });
            }

        }
    });
