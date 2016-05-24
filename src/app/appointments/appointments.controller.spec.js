describe('AppointmentsController', function () {

    var controller, service, q, rootScope;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($controller, appointmentsService, $q, $rootScope) {
        controller = $controller;
        service = appointmentsService;
        q = $q;
        rootScope = $rootScope;
        spyOn(service, 'getAppointments').and.returnValue(q.when([]));
    }));

    it('exists', function () {
        var ctrl = controller('AppointmentsController');
        expect(ctrl).toBeDefined();
    });

    it('fetches data', function () {
        var fetchedAppointments = q.when(['Stefan', 'Henryk']);

        service.getAppointments
            .and.returnValue(fetchedAppointments);

        var ctrl = controller('AppointmentsController');
        rootScope.$digest();

        expect(ctrl.list).toEqual(['Stefan', 'Henryk']);
    });

});
