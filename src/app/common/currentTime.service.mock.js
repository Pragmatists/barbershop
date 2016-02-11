angular.module('barbershop.common')
    .run(function (clock) {

        clock.nowIs = function (fakeNow) {
            spyOn(clock, 'now').and.returnValue(fakeNow);
        };

    });
