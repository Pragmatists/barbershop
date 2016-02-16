describe('AppointmentsController', function () {
    var init, service, $q, $rootScope;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($controller, _appointmentsService_, _$q_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $q = _$q_;
        service = _appointmentsService_;
        init = function () {
            return $controller('AppointmentsController');
        };
    }));

    it('fetches appointments list', function () {
        spyOn(service, 'getAppointments')
            .and.returnValue($q.when(['appointment1', 'appointment2']));

        var ctrl = init();
        $rootScope.$apply();

        expect(ctrl.list).toEqual(['appointment1', 'appointment2']);
    });

    it('shows error', function () {
        spyOn(service, 'getAppointments')
            .and.returnValue($q.reject('Ups'));

        var ctrl = init();
        $rootScope.$apply();

        expect(ctrl.list).not.toBeDefined();
        expect(ctrl.error).toBe('Ups');

    });

});
