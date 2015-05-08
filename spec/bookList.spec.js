/* global jasmine, inject, describe, it, beforeEach, expect */ // jshint ignore:line
describe('autofocus directive', function() {
    var $compile, $rootScope, $scope, elem;

    beforeEach(module('appTemplates'));
    beforeEach(module('demo'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();
    }));

    function compile(deleteStr) {
        var str = 'book-list books="books"';
        if (deleteStr) {
            str += ' delete="' + deleteStr + '"';
        }
        elem = $compile('<' + str + '>')($scope)[0];
        $scope.$digest();
    }
    function getText(node) {
        return node.textContent.trim();
    }

    beforeEach(function() {
        $scope.books = [
            {title: "A", author: "B"},
            {title: "Y", author: "Z"}
        ];
    });

    it("should display a simple book list", function() {
        compile();
        var elems = elem.querySelectorAll('div');
        expect(elems.length).toBe(2);
    });
    it("should not have delete buttons without delete attribute", function() {
        compile();
        expect(elem.querySelectorAll('button').length).toBe(0);
    });
    it("should have the books in the correct order", function() {
        compile();
        expect(getText(elem.querySelector('div'))).toEqual('A, by B');
    });

    describe("when delete attribute is present", function() {
        beforeEach(function() {
            $scope.deleteFn = jasmine.createSpy();
            compile('deleteFn(book)');
        });

        it("should have delete buttons for each book", function() {
            expect(elem.querySelectorAll('button').length).toBe(2);
        });
        it("should call the specified delete function when a button is clicked", function() {
            elem.querySelectorAll('button')[1].click();
            expect($scope.deleteFn).toHaveBeenCalledWith($scope.books[1]);
        });
    });
});
