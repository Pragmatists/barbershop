describe('appointmentsService', function () {
    var appointmentsService;
    var http;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (_appointmentsService_, $httpBackend) {
        http = $httpBackend;
        appointmentsService = _appointmentsService_;
    }));

    it('gets appointments', function () {
        var verify = jasmine.createSpy('verifier');
        http.expectGET('/api/appointments')
            .respond(200, ['appointment1', 'appointment2']);

        appointmentsService.getAppointments().then(verify);
        http.flush();

        expect(verify).toHaveBeenCalledWith(['appointment1', 'appointment2'])
    });
});
