angular.module('tagger')
.controller('notesLibraryCtrl', function() {})
.directive('notesLibrary', function() {
    return {
        scope: {
            notes: '<'
        },
        restrict: 'E',
        controller: 'notesLibraryCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: 'angular/notesLibrary/notesLibraryTemplate.html'

    }
})