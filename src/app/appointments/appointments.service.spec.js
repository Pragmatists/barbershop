describe('appointmentsService', function () {

  var appointmentsService
    , http
    , $rootScope;

  beforeEach(module('barbershop.appointments'));
  beforeEach(injectDependencies);

  var appointment1 = {
    client: 'Paweł',
    date: '2016-02-14'
  };
  var appointment2 = {
    client: 'Ola',
    date: '2016-02-13'
  };

  it('exists', function () {
    expect(appointmentsService).toBeDefined();
  });

  it('provides appointments', function () {
    var verify = jasmine.createSpy('verifier');
    http
      .whenGET('/api/appointments')
      .respond(200, [appointment1, appointment2]);

    appointmentsService.fetchAppointments().then(verify);
    http.flush();

    expect(verify).toHaveBeenCalledWith([appointment1, appointment2]);
  });

  function injectDependencies() {
    inject(function (_appointmentsService_, _$rootScope_, $httpBackend) {
      appointmentsService = _appointmentsService_;
      $rootScope = _$rootScope_;
      http = $httpBackend;
    });
  }

});
