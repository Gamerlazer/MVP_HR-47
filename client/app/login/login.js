angular.module('login', [])
.controller('loginController', function($scope, serverRequests) {

  $scope.signInClient = function (username, password) {
    console.log('this button was clicked!');
    serverRequests.signIn(username, password);
  };


});