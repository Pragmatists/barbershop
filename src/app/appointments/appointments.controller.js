angular
  .module('barbershop.appointments')
  .controller('appointmentsController', function (appointments, appointmentsService) {
    var vm = this;
    vm.list = [];
    vm.create = create;

    fetch();

    function fetch() {
      appointmentsService
        .fetchAppointments()
        .then(function (appointments) {
          vm.list = appointments;
        });
    }

    function create() {
      var appointment = {
        client: vm.newAppointmentClient
      };
      appointmentsService
        .createAppointment(appointment)
        .then(function () {
          fetch();
        });
    }
  });
