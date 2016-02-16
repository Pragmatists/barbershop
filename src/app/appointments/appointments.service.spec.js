describe('appointmentsService', function () {
    var appointmentsService, rootScope;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (_appointmentsService_, $rootScope) {
        appointmentsService = _appointmentsService_;
        rootScope = $rootScope;
    }));

    function addAppointment(appointment) {
        appointmentsService.add(appointment);
    }

    it('gets appointments', function () {
        var verify = jasmine.createSpy('verifier');
        addAppointment({client: "Michał", date: "2016-02-17"});

        appointmentsService.getAppointments().then(verify);
        rootScope.$apply();

        expect(verify)
            .toHaveBeenCalledWith([{client: "Michał", date: "2016-02-17"}])
    });
});
