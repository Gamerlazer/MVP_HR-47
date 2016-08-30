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

  return {
    getRequest: getRequest,
    login: login,
    signup: signup
  };

})
.factory('LogOut', function($window) {
  return function () {
    $window.localStorage.removeItem('myFavRest');
  };
});