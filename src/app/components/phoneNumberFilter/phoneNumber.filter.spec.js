describe('phoneNumber filter should', function () {

  var $filter;

  beforeEach(module('barbershop'));
  beforeEach(injectDependencies);

  it('rewrite input', function () {
    var phoneNumberFilter = $filter('phoneNumber');

    var formattedPhoneNumber = phoneNumberFilter('+48123456789');

    expect(formattedPhoneNumber).toBe('+48 123-456-789');
  });

  it('does not fail on undefined', function () {
    var phoneNumberFilter = $filter('phoneNumber');

    var formattedPhoneNumber = phoneNumberFilter(undefined);

    expect(formattedPhoneNumber).toBeUndefined();
  });

  function injectDependencies() {
    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  }

});
