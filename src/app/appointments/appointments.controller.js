angular
  .module('barbershop.appointments')
  .controller('appointmentsController', function (appointmentsService) {
    var vm = this;
    this.list = [{
      client: 'Paweł',
      date: '2016-02-14'
    }];

    appointmentsService
      .fetchAppointments()
      .then(function (appointments) {
        vm.list = appointments;
      })
      .catch(function (error) {
        vm.error = error;
      })
  });
