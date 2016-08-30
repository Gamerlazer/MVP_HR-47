angular.module('login', [])
.controller('loginController', function($scope, serverRequests, $location, $window) {

  $scope.loginClient = function (username, password) {
    serverRequests.login(username, password)
    .then(function(token) {
      $window.localStorage.setItem('myFavRest', token);
      // console.log(response, 'The response object when I login in');
    });
      // $location.path('/favorites');
    // .then(function(response) {
    //   $location.path('/favorites');
    // });
  };


});