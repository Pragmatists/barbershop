angular.module('barbershop.supplies')
  .service('suppliesService', function () {

    var storage = [];

    function supplies() {
      return storage;
    }

    function store(item, amount) {
      var found = _.find(storage, 'item', item);
      if (found) {
        found.amount += amount;
      } else {
        storage.push({
          item: item,
          amount: amount
        });
      }
    }

    function take(item, amount) {
      var found = _.find(storage, 'item', item);
      if (found && found.amount >= amount) {
        found.amount -= amount;
      } else {
        throw new Error();
      }
    }

    return {
      supplies: supplies,
      store: store,
      take: take
    };
  });
