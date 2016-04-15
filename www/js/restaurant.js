angular.module('starter.restaurant', [])
.controller("Restaurant", function( $scope, $ionicModal, $timeout, $location, $state, ProductDetailFactory){
        $scope.product = ProductDetailFactory;        
        });



