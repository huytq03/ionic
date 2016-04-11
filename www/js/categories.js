angular.module('starter.categories', [])
.controller("Category",      function( $scope, $ionicModal, $timeout){
        
        $scope.tabs = [
          {"text" : "Home"},
          {"text" : "Games"},
          {"text" : "Mail"},
          {"text" : "Car"},
          {"text" : "Profile"},
          {"text" : "Favourites"},
          {"text" : "Chats"},
          {"text" : "Settings"},
          {"text" : "Photos"},
          {"text" : "Pets"}
        ];
        $scope.onSlideMove = function(data){
          alert("You have selected " + data.index + " tab");
        };
        }
        );


