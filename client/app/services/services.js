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
    }).then(function (response) {
      // something with the body of the response
      // if you return, the promise will be flowed into the next section
      // console.log(response, 'response from server');
      return response;
    });
  };

  return {
    getRequest: getRequest,
    signIn: signIn
  };

});