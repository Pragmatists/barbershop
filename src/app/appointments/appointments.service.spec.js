describe('appointmentsService', function () {
    var service, http, rootScope;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (_appointmentsService_, $httpBackend, $rootScope) {
        service = _appointmentsService_;
        http = $httpBackend;
        rootScope = $rootScope;
    }));

    it('lists', function () {
        http.expectGET('/api/appointments').respond(200, ['app1', 'app2']);
        var verify = jasmine.createSpy('verifier');

        service.list().then(verify);
        http.flush();

        expect(verify).toHaveBeenCalledWith(['app1', 'app2']);
    });

    it('creates', function () {
        var verify = jasmine.createSpy('verifier');
        http.expectPOST('/api/appointments', {client : 'John'}).respond(202);

        service.create({client : 'John'}).then(verify);

        http.flush();
        expect(verify).toHaveBeenCalled();
    });

    it('triggers event after creation', function () {
        var verify = jasmine.createSpy('verifier');
        rootScope.$on('appointmentCreated', verify);
        http.whenPOST('/api/appointments', {client : 'John'}).respond(202, {id : 1});

        service.create({client : 'John'});
        http.flush();

        expect(verify).toHaveBeenCalledWith(jasmine.anything(), {id : 1});
    });

});
