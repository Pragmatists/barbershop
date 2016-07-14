describe('appointment component', function () {

    var compile, scope;

    beforeEach(module('barbershop.appointments', 'barbershop.templates'));

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    }));

    it('exists', function () {
        scope.current = {id : 1, client : 'John'};

        var component = createComponent('<appointment details="current"></appointment>');

        expect(component.find('.appointment__client')).toHaveText('John');
    });

    function createComponent(html) {
        var component = compile(html)(scope);
        scope.$digest();
        return component;
    }

});
