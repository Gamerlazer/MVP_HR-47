angular.module('app', [
  'ngRoute',
  'login',
  'services',
  'favorites',
  'search',
  'signup'
])
.config(function( $routeProvider, $httpProvider ) {
  $routeProvider
    .when('/login', {
      templateUrl: 'app/login/login.html',
      controller: 'loginController'
    })
    .when('/favorites', {
      templateUrl: 'app/favorites/favorites.html'
    })
    .when('/search', {
      templateUrl: 'app/search/search.html',
      controller: 'searchController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    });
  $httpProvider.interceptors.push('GrabToken');
})
.factory('GrabToken', function ($window) {
  return {
    request: function (object) {
      var token = $window.localStorage.getItem('myFavRest');
      object.headers['myFavToken-access-token'] = token;
      return object;
    }
  };
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