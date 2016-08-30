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
      templateUrl: 'app/favorites/favorites.html',
      controller: 'favoritesController'
    })
    .when('/search', {
      templateUrl: 'app/search/search.html',
      controller: 'searchController'
    })
    .when('/signup', {
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })
    .otherwise({redirectTo: '/login'});
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
