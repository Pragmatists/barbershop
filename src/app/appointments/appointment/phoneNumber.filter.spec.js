describe('phoneNumber filter', function () {

    var phoneNumberFilter;

    beforeEach(module('barbershop.appointments'));

    beforeEach(inject(function (_phoneNumberFilter_) {
        phoneNumberFilter = _phoneNumberFilter_;
    }));

    it('filters', function () {
        expect(phoneNumberFilter(undefined)).toBe(undefined);
        expect(phoneNumberFilter('123456789')).toBe('123 456 789');
        expect(phoneNumberFilter('1234')).toBe('1 234');
        expect(phoneNumberFilter('123')).toBe('123');
    });


});
