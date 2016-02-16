describe('AppointmentsController', function () {
    var init;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($controller) {
        init = function (injectables) {
            return $controller('AppointmentsController', injectables);
        };
    }));

    it('binds appointments list', function () {
        var ctrl = init({appointmentsList: ['app1', 'app2']});

        expect(ctrl.list).toEqual(['app1', 'app2']);

    });


});
