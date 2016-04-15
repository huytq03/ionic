// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.categories', 'tabSlideBox', 'starter.services', 'starter.restaurant'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)starter.services
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'Category'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'Service'
      }
    }
  })
  .state('app.productFavor', {
    url: '/productFavor',
    views: {
      'menuContent': {
        templateUrl: 'templates/productsfavor.html',
        controller: 'Category'
      }
    }
  })
  .state('app.productDetail', {
    url: '/productDetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/productDetail.html',
        controller: 'Restaurant'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})
.factory('ProductFactory', function(){
    return {
        name: "test",
        taste:[],
        data: [],
        serviceName: "test"
    }               
})
.factory('ProductDetailFactory', function(){
  return {
                    "id": 12,
                    "title": "Burrata Prosciutto",
                    "restaurant": {
                        "id": 12,
                        "name": "Pizza 4P",
                        "address": "740 S Olive St, Los Angeles, CA",
                        "phone": 123456789,
                        "open": false,
                        "latitude": 37.7759941,
                        "longitude": -122.413994
                    },
                    "description": "Every morning, we use freshly drawn milk from the cows grown in this rich natural environment and carefully make each cheese by hand.",
                    "calory": 150,
                    "image": "http://media-cdn.tripadvisor.com/media/photo-s/07/98/4b/52/pizza-4p-s.jpg",
                    "rating": 4,
                    "price": 13.5,
                    "distance": 2.1,
                    "eta": 135000,
                    "delivery_fee": 1.5
                };              
})
;
