angular.module('app', [
  'ngRoute',
  'login',
  'services',
  'favorites',
  'search',
  'signup',
  'ui.router'
])
.config(function($stateProvider, $httpProvider, $urlRouterProvider) {
  $stateProvider
    .state('/login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'loginController'
    })
    .state('/favorites', {
      url: '/favorites',
      templateUrl: 'app/favorites/favorites.html',
      controller: 'favoritesController'
    })
    .state('/search', {
      url: '/search',
      templateUrl: 'app/search/search.html',
      controller: 'searchController'
    })
    .state('/signup', {
      url: '/signup',
      templateUrl: 'app/signup/signup.html',
      controller: 'signupController'
    })

  $urlRouterProvider.otherwise('/login');
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
