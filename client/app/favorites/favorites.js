angular.module('favorites', [])

.controller('favoritesController', function($scope, LogOut, serverRequests, DataClean) {
  $scope.favorites = [];
  $scope.hasFavorites = false;
  
  $scope.logout = function () {
    LogOut();
  };
  
  $scope.test = function(favorite) {
    console.log(favorite, '<-------- favorite clicked');
  };

  $scope.getFavorites = function () {
    serverRequests.getFavorites()
      .then(function(favorites) {
        if (!favorites) {
          console.log('No favorites');
        } else {
          $scope.hasFavorites = true;
          console.log(favorites, 'THE FAVORITES')
          favorites.data.forEach(function(biz) {
            $scope.favorites.push(DataClean(biz));
          });
        }
      });
  };
  $scope.getFavorites();

});

