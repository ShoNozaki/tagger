angular.module('tagger')
 .controller('appCtrl', function(service) {
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

  this.makeNotes = (data) => {
    console.log('data =',data)
    this.notesData = data.data
    console.log('notesData = ',this.notesData)
  };

  service.getNotes(this.makeNotes);

  this.createMessage = service.postNotes(this);

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