/* global jasmine, inject, describe, it, beforeEach, expect */ // jshint ignore:line
describe('autofocus directive', function() {
    var $compile, $rootScope, $scope;

    beforeEach(module('appTemplates'));
    beforeEach(module('demo'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();
    }));
});
