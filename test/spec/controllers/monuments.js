'use strict';

describe('Controller: MonumentsCtrl', function () {

  // load the controller's module
  beforeEach(module('p3App'));

  var MonumentsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonumentsCtrl = $controller('MonumentsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MonumentsCtrl.awesomeThings.length).toBe(3);
  });
});
