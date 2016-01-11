angular
  .module('barbershop.supplies')
  .directive('basDecrease', function basDecrease() {
    return {
      restrict: 'E',
      template: '<span class="bas-decrease__button" ng-click="decrease.perform()"></span>',
      scope: {},
      bindToController: {
        item: '='
      },
      controllerAs: 'decrease',
      controller: function (suppliesService) {

        var vm = this;

        vm.perform = function () {
          if (vm.item.amount) {
            suppliesService.take(vm.item.item, 1);
          }
        }

      }
    };
  });
