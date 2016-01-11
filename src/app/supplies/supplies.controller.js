angular.module('barbershop.supplies')
  .controller('SuppliesController', function (suppliesService) {
    var vm = this;

    vm.list = suppliesService.supplies();

    vm.add = function () {
      suppliesService.store(vm.new.item, vm.new.amount);
      delete vm.new;
    };

  });
