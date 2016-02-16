angular
  .module('barbershop')
  .filter('phoneNumber', function () {
      return function (input) {
        return input
          ? input.replace(/(...)(...)(...)(...)/, '$1 $2-$3-$4')
          : undefined;
      }
    }
  );
