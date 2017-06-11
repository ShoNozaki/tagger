angular.module('tagger')
.service('service', function($http, $window) {
  this.getNotes = function(callback) {
    $http({
      method:'GET',
      url: 'http://localhost:5050/messages'
    })
    .then(function successCallback(data) {
      console.log(data);
      callback(data);
      console.log('Success');
    })
    .catch(function errorCallback(response) {
      console.log('error = ', response)
    })
  },
  this.postNotes = function(message) {
    $http({
      method:'POST',
      url: 'http://localhost:5050/messages'
    })
    .then(function successCallback(data) {
      console.log(data);
      console.log('Success');
    })
    .catch(function errorCallback(response) {
      console.log('error = ', response)
    })
  }
})