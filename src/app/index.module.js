(function() {
  'use strict';

  angular
    .module('barbershop', [
      'ngMessages',
      'ui.router',
      'ui.bootstrap',
      'toastr',

      'barbershop.supplies'
    ]);

})();
