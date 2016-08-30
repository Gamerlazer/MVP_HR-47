angular.module('services', [])
.factory('serverRequests', function($http, $location, $rootScope) {

  var login = function (username, password) {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: {
        username: username,
        password: password
      }
    }).then(function (response) {
      if (response.data.token) {
        return response.data.token;
      } else if (!response.data.existingUser) {
        return null;
      }
    });
  };

  var signup = function (username, password) {
    return $http({
      method: 'POST',
      url: '/api/signup',
      data: {
        username: username,
        password: password
      }
    }).then(function(response) {
      if (response.data.existingUser) {
        $location.path('/login');
      } else {
        return response.data.token;
      }
    });
  };

  var saveFavorite = function(business) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: business
    }).then(function (response) {
      return response;
    });
  };

  var getFavorites = function () {
    return $http({
      method: 'GET',
      url: '/api/favorites'
    }).then(function(favorites) {
      if (favorites.existingUser === false) {
        return null;
      } else {
        return favorites;
      }
    });
  };

  var yelpSearch = function(term, location) {
    console.log(term, location, 'my search');
    return $http({
      method: 'POST',
      url: '/api/yelpSearch',
      data: {term: term, location: location}
    }).then(function(results) {
      console.log(results);
    })
    .catch(function (error) {
      console.log(error, 'ERROR')
    });
  };


  return {
    yelpSearch: yelpSearch,
    saveFavorite: saveFavorite,
    getFavorites: getFavorites,
    login: login,
    signup: signup
  };

})
.factory('LogOut', function($window, $location) {
  return function () {
    $window.localStorage.removeItem('myFavRest');
    $location.path('/login');
  };
})
.factory('DataClean', function () {
  return function(biz) {
    return {
      name: biz.bizName,
      categories: biz.bizCategories.split(','),
      displayAddress: biz.bizLocation.split(','),
      ratingImgUrl: biz.bizRating,
      bizImage: biz.bizImage
    };
  };
});