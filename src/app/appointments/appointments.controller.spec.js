describe('appointmentsController', function () {

  var init
    , $q
    , $rootScope
    , appointmentsService;

  beforeEach(module('barbershop.appointments'));

  beforeEach(inject(function ($controller, _$rootScope_, _$q_, _appointmentsService_) {
    init = function (injectables, bindings) {
      return $controller('appointmentsController', injectables, bindings);
    };
    $rootScope = _$rootScope_;
    $q = _$q_;
    appointmentsService = _appointmentsService_;
  }));

  it('exists', function () {
    var ctrl = init();

    expect(ctrl).toBeDefined();
  });

  it('fetches list of appointments', function () {
    spyOn(appointmentsService, 'fetchAppointments')
      .and.returnValue($q.when(['appointment1', 'appointment2']));

    var ctrl = init();
    $rootScope.$apply();

    expect(ctrl.list).toEqual(['appointment1', 'appointment2']);
  });

  it('fetches list of appointments', function () {
    spyOn(appointmentsService, 'fetchAppointments')
      .and.returnValue($q.reject('failure :-('));

    var ctrl = init();
    $rootScope.$apply();

    expect(ctrl.list).toBeDefined();
    expect(ctrl.error).toBe('failure :-(');
  });

});
