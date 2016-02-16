angular.module('barbershop.appointments')
    .config(function ($stateProvider) {

        $stateProvider.state('appointments', {
            url: '/appointments',
            parent: 'app',
            templateUrl: 'app/appointments/appointments.html',
            controllerAs: 'appointments',
            controller: 'AppointmentsController',
            resolve: {
                appointmentsList: function (appointmentsService) {
                    return appointmentsService.getAppointments();
                }
            }
        });
    });
