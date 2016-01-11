(function () {
  'use strict';

  angular
    .module('barbershop')
    .directive('acmeNavbar', function acmeNavbar() {
        return {
          restrict: 'E',
          templateUrl: 'app/components/navbar/navbar.html'
        };

      }
    );


})();
