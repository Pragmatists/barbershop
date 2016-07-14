describe('add-appointment component', function () {

    var compile, scope, appointmentsService;

    beforeEach(module('barbershop.appointments', 'barbershop.templates'));

    beforeEach(inject(function ($compile, $rootScope, _appointmentsService_) {
        compile = $compile;
        scope = $rootScope.$new();
        appointmentsService = _appointmentsService_;
        spyOn(appointmentsService, 'create');
    }));

    it('creates appointment', function () {
        var component = createComponent();

        component.find('input.add-appointment__client')
            .val('John')
            .trigger('input');
        component.find('button.add-appointment__submit')
            .click();

        expect(appointmentsService.create).toHaveBeenCalledWith({client : 'John'});
    });

    function createComponent() {
        var component = compile('<add-appointment></add-appointment>')(scope);
        scope.$digest();
        return component;
    }

});
