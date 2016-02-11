describe('appointmentsService', function () {
    var service, http, clock;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (appointmentsService, $httpBackend, _clock_) {
        service = appointmentsService;
        http = $httpBackend;
        clock = _clock_;
    }));

    it('fetches all appointments', function () {
        var verify = jasmine.createSpy('results');
        http.whenGET('/api/appointments').respond(200, ['app1', 'app2']);

        service.list().then(verify);
        http.flush();

        expect(verify).toHaveBeenCalledWith(['app1', 'app2']);
    });

    it('fetches appointments for today', function () {
        clock.nowIs(moment('2016-02-29'));
        var verify = jasmine.createSpy('results');
        http.whenGET('/api/appointments?date=2016-02-29').respond(200, ['app1', 'app2']);

        service.listForToday().then(verify);
        http.flush();

        expect(verify).toHaveBeenCalledWith(['app1', 'app2']);
    });

});
