angular.module('login', [])
.controller('loginController', function($scope, serverRequests, $location) {

  $scope.signInClient = function (username, password) {
    serverRequests.signIn(username, password)
    .then(function(response) {
      console.log(response, 'loginController');
    });
      // $location.path('/favorites');
    // .then(function(response) {
    //   $location.path('/favorites');
    // });
  };


});