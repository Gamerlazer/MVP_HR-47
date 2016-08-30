angular.module('services', [])
.factory('serverRequests', function($http) {
  var getRequest = function () {
    console.log('test');
  };

  var login = function (username, password) {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: {
        username: username,
        password: password
      }
    }).then(function (response) {
      return response.data.token;
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
      console.log(response, 'SIGN UP RESPONSE');
      return response.data.token;
    });
  };

  var saveFavorite = function(business) {
    return $http({
      method: 'POST',
      url: '/api/search',
      data: business
    }).then(function (response) {
      // Passes the data to where it's invoked next
      return response;
    });
  };


  return {
    getRequest: getRequest,
    saveFavorite: saveFavorite,
    login: login,
    signup: signup
  };

})
.factory('LogOut', function($window) {
  return function () {
    $window.localStorage.removeItem('myFavRest');
  };
});