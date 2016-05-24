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
        var fetchedAppointments = q.when([
            {client : 'Stefan'},
            {client : 'Henryk'}
        ]);

        service.getAppointments
            .and.returnValue(fetchedAppointments);

        var ctrl = controller('AppointmentsController');
        rootScope.$digest();

        expect(ctrl.list).toEqual([
            {client : 'Stefan'},
            {client : 'Henryk'}
        ]);
    });

    it('adds an appointment', function () {
        spyOn(service, 'addAppointment').and.returnValue(q.when(true));
        var ctrl = controller('AppointmentsController');
        ctrl.newAppointment = {client : 'Józek'};

        ctrl.add();

        expect(service.addAppointment)
            .toHaveBeenCalledWith({client : 'Józek'});
    });

    it('refreshes the list after adding', function () {
        var ctrl = controller('AppointmentsController');
        spyOn(service, 'addAppointment').and.returnValue(q.when(true));
        service.getAppointments.calls.reset();
        service.getAppointments.and.returnValue(q.when(['refreshed']));

        ctrl.add();

        expect(service.addAppointment).toHaveBeenCalled();

        rootScope.$digest();
        expect(service.getAppointments).toHaveBeenCalled();
        expect(ctrl.list).toEqual(['refreshed']);
    });

    it('clears newAppointment after creation', function () {
        var ctrl = controller('AppointmentsController');
        spyOn(service, 'addAppointment').and.returnValue(q.when(true));

        ctrl.newAppointment = {client : 'Heniek'};
        ctrl.add();
        rootScope.$digest();

        expect(ctrl.newAppointment).toBeUndefined();

    });

});
