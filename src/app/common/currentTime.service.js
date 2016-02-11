angular.module('barbershop.common')
    .service('clock', function () {
        return {
            now: function () {
                return moment();
            },
            today: function () {
                return this.now().format('YYYY-MM-DD');
            }
        }
    });
