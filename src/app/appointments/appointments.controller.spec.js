describe('appointmentsController', function () {

  var initController
    , $q
    , $rootScope
    , appointmentsService;

  beforeEach(module('barbershop.appointments'));
  beforeEach(injectDependencies);
  beforeEach(createControllerInitializer);

  var anyAppointments = ['first', 'seconds'];

  it('exists', function () {
    var controller = initController();

    expect(controller).toBeDefined();
  });

  it('fetches list of appointments', function () {
    spyOn(appointmentsService, 'fetchAppointments')
      .and.returnValue($q.when(['appointment1', 'appointment2']));
    var controller = initController();
    $rootScope.$apply();

    expect(controller.list).toEqual(['appointment1', 'appointment2']);
  });

  it('creates new appointment', function () {
    spyOn(appointmentsService, 'fetchAppointments').and.returnValue($q.when(anyAppointments));
    spyOn(appointmentsService, 'createAppointment').and.returnValue($q.when());

    var controller = initController();

    controller.newAppointmentClient = 'appointment3';
    controller.create();
    $rootScope.$apply();

    expect(appointmentsService.createAppointment).toHaveBeenCalledWith({client: 'appointment3'});
  });

  it('refetches appointments after creation of a new one', function () {
    spyOn(appointmentsService, 'fetchAppointments').and.returnValue($q.when(anyAppointments));
    spyOn(appointmentsService, 'createAppointment').and.returnValue($q.when());
    var controller = initController();

    controller.newAppointmentClient = 'appointment3';
    controller.create();
    $rootScope.$apply();

    expect(appointmentsService.fetchAppointments).toHaveBeenCalledTimes(2);
  });

  it('does not refetch appointments after failure of creation of a new one', function () {
    spyOn(appointmentsService, 'fetchAppointments').and.returnValue($q.when(anyAppointments));
    spyOn(appointmentsService, 'createAppointment').and.returnValue($q.reject());
    var controller = initController();

    controller.newAppointmentClient = 'appointment3';
    controller.create();
    $rootScope.$apply();

    expect(appointmentsService.fetchAppointments).toHaveBeenCalledTimes(1);
  });

  function injectDependencies() {
    inject(function (_$rootScope_, _$q_, _appointmentsService_) {
      $rootScope = _$rootScope_;
      $q = _$q_;
      appointmentsService = _appointmentsService_;
    });
  }

  function createControllerInitializer() {
    inject(function ($controller) {
      initController = function (injectables, bindings) {
        injectables = injectables || {
            appointments: []
          };
        return $controller('appointmentsController', injectables, bindings);
      };
    });
  }

});
