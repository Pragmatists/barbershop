angular.module('barbershop.supplies')
  .controller('SuppliesController', function (suppliesService) {
    var vm = this;

    vm.list = suppliesService.supplies();
  });
