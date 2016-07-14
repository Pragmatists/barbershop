describe('appointments component', function () {

    var compile, scope, appointmentsService, q;

    beforeEach(module('barbershop.appointments', 'barbershop.templates'));

    beforeEach(inject(function ($compile, $rootScope, _appointmentsService_, $q) {
        compile = $compile;
        scope = $rootScope.$new();
        q = $q;
        appointmentsService = _appointmentsService_;
        spyOn(appointmentsService, 'list').and.returnValue(q.resolve([]));
    }));

    it('has title', () => {
        var component = createComponent();

        expect(component.find('.appointments__title')).toHaveText('Appointments');
    });

    it('has add-appointment control', () => {
        var component = createComponent();

        expect(component.find('add-appointment')).toExist();
    });

    it('has empty appointments list', function () {
        var component = createComponent();

        expect(component.find('appointment').length).toBe(0);
    });

    it('downloads appointments', () => {
        appointmentsService.list.and.returnValue(q.resolve([
            {id : 1, client : 'John'},
            {id : 2, client : 'Jane'}
        ]));

        var component = createComponent();

        expect(component.find('appointment').length).toBe(2);
    });

    it('binds appointments', function () {
        appointmentsService.list.and.returnValue(q.resolve([
            {id : 1, client : 'John'}
        ]));

        var component = createComponent();

        expect(component.find('appointment').html()).toContain('John');
    });

    function createComponent() {
        var component = compile('<appointments></appointments>')(scope);
        scope.$digest();
        return component;
    }

});
