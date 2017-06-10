angular.module('tagger')
.controller('noteEntryCtrl', function() {})
.directive('noteEntry', function() {
    return {
        scope: {
            note: '<'
        },
        restrict: 'E',
        controller: 'noteEntryCtrl',
        controllerAs: 'ctrl',
        bindToController: true,
        templateUrl: '/angular/notesLibrary/noteEntryTemplate.html'

    }
})