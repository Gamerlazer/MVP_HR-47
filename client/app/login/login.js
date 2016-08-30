angular.module('login', [])
.controller('loginController', function($scope, serverRequests, $location, $window) {

  $scope.loginClient = function (username, password) {
    serverRequests.login(username, password)
    .then(function(token) {
      if (!token) {
        $location.path('/signup');
      } else if (token) {
        $window.localStorage.setItem('myFavRest', token);
        $location.path('/favorites');
      }
    });
  };
});