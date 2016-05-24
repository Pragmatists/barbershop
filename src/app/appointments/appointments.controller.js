angular.module('barbershop.appointments')
    .controller('AppointmentsController', function (appointmentsService) {
        var vm = this;

        fetchList();

        vm.add = function () {
            appointmentsService.addAppointment(vm.newAppointment)
                .then(function () {
                    vm.newAppointment = undefined;
                })
                .then(fetchList);
        };

        function fetchList() {
            appointmentsService.getAppointments()
                .then(function (data) {
                    vm.list = data;
                });
        }
    });
