angular.module('barbershop.supplies')
  .config(function ($stateProvider) {
    $stateProvider.state('supplies', {
      parent: 'app',
      url: '/supplies',
      templateUrl: 'app/supplies/supplies.html'
    })
  });
