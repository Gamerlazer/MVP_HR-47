angular.module('favorites', [])

.controller('favoritesController', function($scope, LogOut, serverRequests) {
  $scope.favorites = [];
  $scope.logout = function () {
    LogOut();
  };
  
  $scope.getFavorites = function () {
    serverRequests.getFavorites()
      .then(function(favorites) {
        if (!favorites) {
          console.log('No favorites');
        } else {
          favorites.data.forEach(function(biz) {
            // console.log(biz);
            var business = {
              name: biz.bizName,
              categories: biz.bizCategories.split(','),
              displayAddress: biz.bizLocation.split(','),
              ratingImgUrl: biz.bizRating,
              bizImage: biz.bizImage
            };
            $scope.favorites.push(business);
            // console.log(business, 'business');
          })
          // var cats = favorites.data.bizCategories.split(',')
          // $scope.favorites = favorites.data;
          // console.log(favorites.data[0]);
          // console.log(cats);
        }
      });
  };

  $scope.getFavorites();

});

/*

1
bizCategories
:
"American (New),Brasseries"
bizImage
:
"https://s3-media4.fl.yelpcdn.com/bphoto/uweSiOf0XBB4BPk_ibHVyg/ms.jpg"
bizLocation
:
"500 Brannan St,SoMa,San Francisco, CA 94107"
bizName
:
"Marlowe"
bizRating
:
"https://s3-media4.fl.yelpcdn.com/assets/2/www/img/f62a5be2f902/ico/stars/v1/stars_small_4.png"
createdAt
:
"2

*/