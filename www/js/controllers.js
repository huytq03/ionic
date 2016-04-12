angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $http) {
  // $http.get('http://localhost:8080/api/cuisines').success(function(data) {
  //      $scope.playlists = data;
  //   }).error(function(data, status) {                                            
  //       alert('Error! ' + status + ' : ' + data)                                  
  //   });
    $scope.playlists = [
    {
      "id": 4,
      "name": "American",
      "dishes": 555,
      "description": "Rustle up famous dishes from American popular culture, from burgers and ribs to soul food.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/american_16x9.jpg"
    },
    {
      "id": 1,
      "name": "Mexican",
      "dishes": 950,
      "description": "Mexican food is so fresh and easy - think hot quesadillas, piles of nachos and spicy beans and crunchy tacos.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/mexican_16x9.jpg"
    },
    {
      "id": 2,
      "name": "Italian",
      "dishes": 432,
      "description": "Enjoy traditional Italian dishes with classics such as lasagne, and regional specialities.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/italian_16x9.jpg"
    },
    {
      "id": 3,
      "name": "British",
      "dishes": 555,
      "description": "Enjoy classic British dishes such as fish and chips as well as authentic regional specialities.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/british_16x9.jpg"
    },
    {
      "id": 5,
      "name": "Caribean",
      "dishes": 555,
      "description": "Shake up the kitchen experimenting with jerk seasoning or classics such as curried goat.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/caribbean_16x9.jpg"
    },
    {
      "id": 6,
      "name": "Chinese",
      "dishes": 12,
      "description": "Beat the takeaway with recipes from Chinese cookery master Ken Hom and other BBC chefs.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/chinese_16x9.jpg"
    },
    {
      "id": 7,
      "name": "French",
      "dishes": 555,
      "description" : "Show off your culinary skills with regional and traditional French treats such as coq au vin",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/french_16x9.jpg"
    },
    {
      "id": 8,
      "name": "Indian",
      "dishes": 555,
      "description" : "Make easy vegetarian, vegan and meaty curries using spices such as saffron, cardamom and hot chillies.",
      "image": "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/indian_16x9.jpg"
    },
    {
      "id" : 9,
      "name" : "Japanese",
      "description" : "Create your own traditional bento box or try homemade sushi with wasabi and Japanese rice.",
      "image" : "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/japanese_16x9.jpg"
    },
    {
      "id" : 10,
      "name" : "Thai",
      "description" : "Recipes for classic Thai green curry and pad Thai, plus traditional dishes from Singapore and Vietnam.",
      "image" : "http://ichef.bbci.co.uk/food/ic/food_16x9_608/cuisines/thai_and_south-east_asian_16x9.jpg"
    }
    ]; 
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
