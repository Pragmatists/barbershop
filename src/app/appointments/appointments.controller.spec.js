describe('AppointmentsController', function () {

    var controller, http, generateId, whenListFetched;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($controller, $httpBackend, _generateId_) {
        controller = $controller;
        http = $httpBackend;
        generateId = _generateId_;
        whenListFetched = http.whenGET('/api/appointments');
        whenListFetched.respond(200, ['fake']);
    }));

    function instantiateController() {
        var ctrl = controller('AppointmentsController');
        http.flush();
        return ctrl;
    }

    it('fetches data', function () {
        whenListFetched.respond(200, [
            {client : 'Stefan'},
            {client : 'Henryk'}
        ]);

        var ctrl = instantiateController();

        expect(ctrl.list).toEqual([
            {client : 'Stefan'},
            {client : 'Henryk'}
        ]);
    });

    it('adds an appointment', function () {
        var ctrl = instantiateController();
        spyOn(generateId, 'generate').and.returnValue('123');
        http.expectPOST('/api/appointments', {client : 'Józek', id : '123'}).respond(200);
        ctrl.newAppointment = {client : 'Józek'};

        ctrl.add();

        http.flush();
    });

    it('refreshes the list after adding', function () {
        var ctrl = instantiateController();
        ctrl.newAppointment = {};
        whenListFetched.respond(200, ['refreshed']);
        http.whenPOST('/api/appointments').respond(200);

        ctrl.add();
        http.flush();

        expect(ctrl.list).toEqual(['refreshed']);
    });

    it('clears newAppointment after creation', function () {
        var ctrl = instantiateController();
        http.whenPOST('/api/appointments').respond(200);
        ctrl.newAppointment = {client : 'Heniek'};

        ctrl.add();
        http.flush();

        expect(ctrl.newAppointment).toBeUndefined();
    });

});
