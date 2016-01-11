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

  it('adds item to supplies', function () {
    spyOn(suppliesService, 'store');
    var ctrl = init();

    ctrl.new = {item: 'scissors', amount: 2};
    ctrl.add();

    expect(suppliesService.store).toHaveBeenCalledWith('scissors', 2);
  });

  it('clears input after adding', function () {
    spyOn(suppliesService, 'store');
    var ctrl = init();

    ctrl.new = {item: 'scissors', amount: 2};
    ctrl.add();

    expect(ctrl.new).toBeUndefined();
  });

  it('decreases amounts', function () {
    spyOn(suppliesService, 'take');
    var ctrl = init();

    ctrl.decrease({item: 'shampoo', amount: 1});

    expect(suppliesService.take).toHaveBeenCalledWith('shampoo', 1);
  });

  it('does not decrease when empty', function () {
    spyOn(suppliesService, 'take');
    var ctrl = init();

    ctrl.decrease({item: 'shampoo', amount: 0});

    expect(suppliesService.take).not.toHaveBeenCalled();
  });

});
