'use strict';

describe('Service: monuments', function () {

  // load the service's module
  beforeEach(module('p3App'));

  // instantiate service
  var monuments;
  beforeEach(inject(function (_monuments_) {
    monuments = _monuments_;
  }));

  it('should do something', function () {
    expect(!!monuments).toBe(true);
  });

});
