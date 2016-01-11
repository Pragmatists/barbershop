(function() {
  'use strict';

  angular
    .module('barbershop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
