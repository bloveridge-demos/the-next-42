/* global angular */
var app = angular.module('demo', []);

app.directive('autofocus', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            $timeout(function() {
                elem[0].focus();
            }, 0, false);
        }
    };
});
