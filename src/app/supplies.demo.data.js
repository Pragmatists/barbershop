angular.module('barbershop')
  .run(function (suppliesService) {

    suppliesService.store('scissors', 3);
    suppliesService.store('shampoo', 5);
    suppliesService.store('conditioner', 2);
    suppliesService.store('wig', 1);

  });
