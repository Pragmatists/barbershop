describe('appointments component', function () {

    var compile, scope, appointmentsService;

    beforeEach(module('barbershop.appointments', 'barbershop.templates'));

    beforeEach(inject(function ($compile, $rootScope, _appointmentsService_, $q) {
        compile = $compile;
        scope = $rootScope.$new();
        appointmentsService = _appointmentsService_;
        spyOn(appointmentsService, 'list').and.returnValue($q.resolve([]));
    }));

    it('has title', () => {
        var component = compile('<appointments></appointments>')(scope);
        scope.$digest();

        expect(component.find('.appointments__title')).toHaveText('Appointments');
    });

    it('downloads appointments', function () {

    });

});
