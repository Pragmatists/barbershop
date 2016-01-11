describe('bas-decrease directive', function () {

  var scope, suppliesService, compile;

  beforeEach(module('barbershop.supplies'));

  beforeEach(inject(function ($rootScope, $compile, _suppliesService_) {
    scope = $rootScope.$new();
    compile = $compile;
    suppliesService = _suppliesService_;
  }));

  it('compiles', function () {
    scope.exampleItem = {item: 'shampoo', amount: 2};

    var element = compile('<bas-decrease item="exampleItem"></bas-decrease>')(scope);

    expect(element).toContainElement('.bas-decrease__button');
  });

  it('takes from supplies', function () {
    spyOn(suppliesService, 'take');
    scope.exampleItem = {item: 'shampoo', amount: 2};
    var element = compile('<bas-decrease item="exampleItem"></bas-decrease>')(scope);

    element.find('.bas-decrease__button').trigger('click');

    expect(suppliesService.take).toHaveBeenCalledWith('shampoo', 1);
  });

  it('does not take from supplies', function () {
    spyOn(suppliesService, 'take');
    scope.outOfStock = {item: 'shampoo', amount: 0};
    var element = compile('<bas-decrease item="outOfStock"></bas-decrease>')(scope);

    element.find('.bas-decrease__button').trigger('click');

    expect(suppliesService.take).not.toHaveBeenCalled();
  });

});
