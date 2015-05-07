/* global angular */
var app = angular.module('demo', []);

app.directive('autofocus', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            if (!attrs.autofocus) {
                $timeout(function() {
                    elem[0].focus();
                }, 0, false);
                return;
            }
            scope.$watch(attrs.autofocus, function(condition) {
                if (condition === true) {
                    elem[0].focus();
                }
            });
        }
    };
});
