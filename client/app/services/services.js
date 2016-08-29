angular.module('services', [])
.factory('serverRequests', function($http) {
  var getRequest = function () {
    console.log('test');
  };

  var signIn = function (username, password) {
    return $http({
      method: 'POST',
      url: '/api/login',
      data: {
        username: username,
        password: password
      }
    });
  };



  return {
    getRequest: getRequest,
    signIn: signIn
  };

});