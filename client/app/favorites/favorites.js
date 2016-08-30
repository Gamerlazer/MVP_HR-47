angular.module('favorites', [])
.controller('favoritesController', function($scope, LogOut) {
  $scope.logout = function () {
    LogOut();
  };
  
});