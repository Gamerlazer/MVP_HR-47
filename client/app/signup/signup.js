angular.module('signup', [])
.controller('signupController', function($scope, serverRequests, $location, $window) {

  $scope.signupClient = function (username, password) {
    serverRequests.signup(username, password)
    .then(function(token) {
      // $window.localStorage.setItem('myFavRest', token);
      // $location.path('/search');
    });
  };


});