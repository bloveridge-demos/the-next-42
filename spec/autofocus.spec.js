/* global inject, describe, it, afterEach, beforeEach, expect */
describe('autofocus directive', function() {
    var $compile, $rootScope, $scope, $timeout, elem;

    beforeEach(module('demo'));

    beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;

        $scope = $rootScope.$new();
    }));

    afterEach(function() {
        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    });

    function compile(condition) {
        var directiveStr = 'x-autofocus';
        if (condition) {
            directiveStr += '="' + condition + '"';
        }
        elem = $compile('<input ' + directiveStr + ' />')($scope)[0];
        document.body.appendChild(elem);
        $scope.$digest();
        $timeout.flush(0);
    }


    describe("when no condition is specified", function() {
        it("should focus immediately", function() {
            compile();
            expect(document.activeElement).toBe(elem);
        });
    });

    describe("when a condition is specified", function() {
        beforeEach(function() {
            compile('x === 1');
        });

        it("should not focus immediately", function() {
            expect(document.activeElement).not.toBe(elem);
        });

        it("should focus once the condition becomes true", function() {
            $scope.x = 1;
            $scope.$digest(); // trigger the $watch
            expect(document.activeElement).toBe(elem);
        });

        it("should not focus if the condition changes to false", function() {
            $scope.x = 2;
            $scope.$digest(); // trigger the $watch
            expect(document.activeElement).not.toBe(elem);
        });

        it("should focus again if the condition is met again", function() {
            $scope.x = 1;
            $scope.$digest();
            elem.blur();
            $scope.x = 2;
            $scope.$digest();
            expect(document.activeElement).not.toBe(elem);
            $scope.x = 1;
            $scope.$digest();
            expect(document.activeElement).toBe(elem);
        });
    });
});

