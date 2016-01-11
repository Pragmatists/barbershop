describe('suppliesService', function () {

  var service;

  beforeEach(module('barbershop.supplies'));

  beforeEach(inject(function (suppliesService) {
    service = suppliesService;
  }));

  it('initially has empty storage', function () {
    expect(service.supplies()).toEqual([]);
  });

  it('stores item', function () {
    service.store('scissors', 1);

    expect(service.supplies()).toEqual([
      {item: 'scissors', amount: 1}
    ]);
  });

  it('adds amount of given item', function () {
    service.store('scissors', 1);
    service.store('scissors', 2);

    expect(service.supplies()).toEqual([
      {item: 'scissors', amount: 3}
    ]);
  });

  it('removes amount of given item', function () {
    service.store('scissors', 3);

    service.take('scissors', 1);

    expect(service.supplies()).toEqual([
      {item: 'scissors', amount: 2}
    ]);
  });

  it('cannot take items that are not in store', function () {
    function takeNotExistingItem() {
      return service.take('scissors', 1);
    }

    expect(takeNotExistingItem).toThrow();
  });

  it('cannot take more items than available', function () {
    service.store('scissors', 1);

    function takeTooManyItems() {
      return service.take('scissors', 2);
    }

    expect(takeTooManyItems).toThrow();
    expect(service.supplies()).toEqual([
      {item: 'scissors', amount: 1}
    ]);
  });

  it('removes amount of given item', function () {
    service.store('scissors', 3);

    service.take('scissors', 1);

    expect(service.supplies()).toEqual([
      {item: 'scissors', amount: 2}
    ]);
  });


});
