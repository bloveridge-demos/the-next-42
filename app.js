/* global angular */
var app = angular.module('demo', []);

app.controller('BooksCtrl', function() {
    this.list = [
        {title: "The Way of Kings", author: "Brandon Sanderson"},
        {title: "Words of Radiance", author: "Brandon Sanderson"},
        {title: "Pudd'nhead Wilson", author: "Mark Twain"},
        {title: "A Christmas Carol", author: "Charles Dickens"}
    ];

    this.deleteBook = function(book) {
        this.list.splice(this.list.indexOf(book), 1);
    };
});


app.directive('bookList', function() {
    return {
        templateUrl: 'bookList.tpl.html',
        scope: true,
        bindToController: {
            books: '=',
            deleteFn: '&delete'
        },
        controllerAs: 'bookList',
        controller: function($attrs) {
            this.canDelete = !!$attrs['delete'];
            this.callDeleteFn = function(book) {
                this.deleteFn({book:book});
            };
        }
    };
});
