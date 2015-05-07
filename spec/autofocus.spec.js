/* global inject, describe, it, afterEach, beforeEach, expect */
describe('autofocus directive', function() {
    var $compile, $rootScope, $scope;

    beforeEach(module('demo'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();
    }));

    it('', function() {});
});

