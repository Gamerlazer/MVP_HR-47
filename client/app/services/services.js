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
        console.log('user exists');
        $location.path('/login');
      } else {
        console.log('new user');
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
      if (favorites) {
        return favorites;
      } else {
        return null;
      }
    });
  };

  return {
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
});