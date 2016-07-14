(function () {
    'use strict';

    angular
        .module('barbershop')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastrConfig, $qProvider) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastrConfig.allowHtml = true;
        toastrConfig.timeOut = 3000;
        toastrConfig.positionClass = 'toast-top-right';
        toastrConfig.preventDuplicates = true;
        toastrConfig.progressBar = true;

        $qProvider.errorOnUnhandledRejections(false);
    }

})();
