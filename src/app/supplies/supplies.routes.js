angular.module('barbershop.supplies')
  .config(function ($stateProvider) {
    $stateProvider.state('supplies', {
      parent: 'app',
      url: '/supplies',
      templateUrl: 'app/supplies/supplies.html',
      controllerAs: 'supplies',
      controller: 'SuppliesController'
    });
    });
