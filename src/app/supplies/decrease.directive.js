angular
  .module('barbershop.supplies')
  .directive('basDecrease', function basDecrease() {
    return {
      restrict: 'E',
      template: '<span class="bas-decrease__button" ng-click="supplies.decrease(item)"></span>'
    };
  });
