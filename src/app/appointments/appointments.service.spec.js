describe('appointmentsService', function () {
    var appointmentsService, httpBackend, generateId;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (_appointmentsService_, $httpBackend, _generateId_) {
        appointmentsService = _appointmentsService_;
        httpBackend = $httpBackend;
        generateId = _generateId_
    }));

    it('fetches appointments', function () {
        var verify = jasmine.createSpy('verifier');
        httpBackend.expectGET('/api/appointments')
            .respond(200, ['Henryk', 'Stefan']);

        appointmentsService.getAppointments().then(verify);
        httpBackend.flush();

        expect(verify).toHaveBeenCalledWith(['Henryk', 'Stefan']);
    });

    it('adds and appointment', function () {
        var verify = jasmine.createSpy('verify');
        spyOn(generateId, 'generate').and.returnValue('123');
        httpBackend.expectPOST('/api/appointments', {client : 'Stefan', id : '123'})
            .respond(200);

        appointmentsService.addAppointment({client : 'Stefan'})
            .then(verify);

        httpBackend.flush();
    });

});

