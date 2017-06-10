angular.module('tagger')
.controller('createViewCtrl', function() {})
.directive('createView', function() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'createViewCtrl',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '/angular/editor/createViewTemplate.html'
    }
})