describe('SuppliesController', function () {

  var suppliesService, init;

  beforeEach(module('barbershop.supplies'));

  beforeEach(inject(function ($controller, _suppliesService_) {
    init = function init() {
      return $controller('SuppliesController');
    };

    suppliesService = _suppliesService_;
  }));

  it('shows supplies', function () {
    spyOn(suppliesService, 'supplies').and.returnValue([{item: 'sth', amount: 1}]);

    var ctrl = init();

    expect(ctrl.list).toEqual([{item: 'sth', amount: 1}]);
  });

});
