describe('appointmentsService', function () {
    var service, httpBackend, generateId;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (appointmentsService, $httpBackend, _generateId_) {
        service = appointmentsService;
        httpBackend = $httpBackend;
        generateId = _generateId_
    }));

    it('fetches appointments', function () {
        var verify = jasmine.createSpy('verifier');
        httpBackend.expectGET('/api/appointments')
            .respond(200, ['Henryk', 'Stefan']);

        service.getAppointments().then(verify);
        httpBackend.flush();

        expect(verify).toHaveBeenCalledWith(['Henryk', 'Stefan']);
    });

    it('adds and appointment', function () {
        spyOn(generateId, 'generate').and.returnValue('123');
        httpBackend.expectPOST('/api/appointments', {client : 'Stefan', id : '123'})
            .respond(200);

        service.addAppointment({client : 'Stefan'});

        httpBackend.flush();
    });

});

