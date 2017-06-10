angular.module('tagger')
 .controller('appCtrl', function() {
     this.message = 'YOU SUCK',
     this.notesData = [
         {
             message:  'Buy Flower',
             username: 'Sho',
             title: 'TRY HARDER'
         },
         {
             message:  'DO WORK',
             username: 'JAY',
             title:'CANT GET SHIT DONE'
         },
         {
             message: 'GET RICH',
             username: 'Sho & Jay',
             title:'GOALS'
         }
     ];
 })
 .directive('app', function() {
     return {
         scope: {},
         restrict: 'E',
         controller: 'appCtrl',
         controllerAs: 'ctrl',
         bindToController: true,
         templateUrl: '/angular/app/appTemplate.html'
     }
 })