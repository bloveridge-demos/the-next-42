/* global angular */
var app = angular.module('demo', []);

app.controller('BooksCtrl', function() {
    this.list = [
        {title: "The Way of Kings", author: "Brandon Sanderson"},
        {title: "Words of Radiance", author: "Brandon Sanderson"},
        {title: "Pudd'nhead Wilson", author: "Mark Twain"},
        {title: "A Christmas Carol", author: "Charles Dickens"}
    ];
});


app.directive('bookList', function() {
    return {
        templateUrl: 'bookList.tpl.html',
        scope: {
            books: '=',
        }
    };
});
