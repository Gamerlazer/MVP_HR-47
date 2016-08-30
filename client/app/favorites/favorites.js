angular.module('favorites', [])

.controller('favoritesController', function($scope, LogOut, serverRequests) {
  $scope.favorites;
  $scope.logout = function () {
    LogOut();
  };
  
  $scope.getFavorites = function () {
    serverRequests.getFavorites()
      .then(function(favorites) {
        if (!favorites) {
          console.log('No favorites');
        } else {

          // var cats = favorites.data.bizCategories.split(',')
          $scope.favorites = favorites.data;
          console.log(favorites.data[0]);
          // console.log(cats);
        }
      });
  };

  $scope.getFavorites();

});