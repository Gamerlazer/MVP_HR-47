angular.module('favorites', [])

.controller('favoritesController', function($scope, LogOut, serverRequests, DataClean) {
  $scope.favorites = [];
  $scope.hasFavorites = false;
  
  $scope.logout = function () {
    LogOut();
  };
  
  $scope.getFavorites = function () {
    serverRequests.getFavorites()
      .then(function(favorites) {
        if (!favorites) {
          console.log('No favorites');
        } else {
          $scope.hasFavorites = true;
          favorites.data.forEach(function(biz) {
            $scope.favorites.push(DataClean(biz));
          });
        }
      });
  };
  $scope.getFavorites();

});

