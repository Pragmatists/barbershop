describe('AppointmentsController', function () {
    var init;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($controller) {
        init = function (injectables, bindings) {
            return $controller('AppointmentsController', injectables, bindings);
        };
    }));

    it('initializes', function () {
        var ctrl = init({appointments: ['app1', 'app2']});

        expect(ctrl.list).toEqual(['app1', 'app2']);
    });

});
