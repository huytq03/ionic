angular.module('starter.services', [])
.controller("Service",      function( $scope, $ionicModal, $timeout){
        
        $scope.services = [
          {"name" : "Delivery", "icon":"img/delivery.png","url":"/playlists"},
         {"name" : "Pick up", "icon":"img/pickup.png","url":"/playlists"},
         {"name" : "Catering", "icon":"img/catering.png","url":"/playlists"},
         {"name" : "Dine in", "icon":"img/dine.png","url":"/playlists"}
        ];
        
        
        });


