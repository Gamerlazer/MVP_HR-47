angular.module('login', [])
.controller('loginController', function($scope, serverRequests) {

  $scope.signInClient = function (username, password) {
    // console.log($scope.username, $scope.password);
    serverRequests.signIn(username, password);
  };


});