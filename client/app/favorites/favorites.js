angular.module('favorites', [])

.controller('favoritesController', function($scope, LogOut, serverRequests) {
  $scope.favorites;
  $scope.logout = function () {
    LogOut();
  };
  
  $scope.getFavorites = function () {
    console.log('gothere')
    serverRequests.getFavorites()
      .then(function(favorites) {
        if (!favorites) {
          console.log('no favorites');
        } else {
          $scope.favorites = favorites;
        }
      });
  };

  $scope.getFavorites();

});