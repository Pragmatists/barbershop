describe('phoneNumber filter', function () {
    var numberFilter;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function ($filter) {
        numberFilter = $filter('phoneNumber');
    }));

    it('adds plus sign', function () {
        var result = numberFilter('123');

        expect(result).toEqual('+123');
    });

    it('undefined stays undefined', function () {

        var result = numberFilter(undefined);

        expect(result).toBeUndefined();

    });

});
