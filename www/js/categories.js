angular.module('starter.categories', [])
.controller("Category",      function( $scope, $ionicModal, $timeout){
        
        $scope.tabs = [
          {"text" : "CUISINE"},
          {"text" : "DISH"}
        ];
        $scope.onSlideMove = function(data){
          //alert("You have selected " + data.index + " tab");
        };
        }
        );


