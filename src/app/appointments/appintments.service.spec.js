describe('appointmentsService', function () {
    var service, httpBackend;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (appointmentsService, $httpBackend) {
        service = appointmentsService;
        httpBackend = $httpBackend;
    }));

    it('fetches appointments', function () {
        var verify = jasmine.createSpy('verifier');
        httpBackend.expectGET('/api/appointments')
            .respond(200, ['Henryk', 'Stefan']);

        service.getAppointments().then(verify);
        httpBackend.flush();

        expect(verify).toHaveBeenCalledWith(['Henryk', 'Stefan']);
    });

});

