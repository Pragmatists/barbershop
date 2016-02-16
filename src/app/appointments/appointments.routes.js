angular
  .module('barbershop.appointments')
  .config(function ($stateProvider) {

    $stateProvider.state('appointments', {
      url: '/appointments',
      parent: 'app',
      templateUrl: 'app/appointments/appointments.html',
      controller: 'appointmentsController',
      controllerAs: 'appointments',
      resolve: {
        appointments: function (appointmentsService) {
          return appointmentsService.fetchAppointments();
        }
      }
    });
  });
