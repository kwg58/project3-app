'use strict';

describe('Service: characters', function () {

  // load the service's module
  beforeEach(module('p3App'));

  // instantiate service
  var characters;
  beforeEach(inject(function (_characters_) {
    characters = _characters_;
  }));

  it('should do something', function () {
    expect(!!characters).toBe(true);
  });

});
