angular.module('app', [
  'ngRoute',
  'login',
  'services'
])

.config(function( $routeProvider, $httpProvider ) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'loginController'
    });
  $httpProvider.interceptors.push('AllowCrossOrigin');
})
.factory('AllowCrossOrigin', function ($window) {
  return {
    request: function (object) {
      object.headers['Allow-Control-Allow-Origin'] = '*';
      // object.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
      return object;
    }
  }
});


// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })