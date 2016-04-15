angular.module('starter.services', [])
.controller("Service",      function( $scope, $ionicModal, $timeout, $location, $state){
        
        $scope.services = [
          {id: 1, "name" : "Delivery", "icon":"img/delivery.png","url":"app.playlists", "icon_menu":"img/leftmenu/delivery.png"},
         {id: 2,"name" : "Pick up", "icon":"img/pickup.png","url":"app.playlists", "icon_menu":"img/leftmenu/pickup.png"},
         {id: 3,"name" : "Catering", "icon":"img/catering.png","url" :"app.playlists", "icon_menu":"img/leftmenu/catering.png"},
         {id: 4,"name" : "Dine in", "icon":"img/dine.png","url":"app.playlists", "icon_menu":"img/leftmenu/dine.png"}
        ];
        $scope.changeService = function(serviceId) {
        	var obj= this.services.find(function(obj) {
        		if(obj.id == serviceId) {
        			return obj;
        		}
        	});
        	if(obj != undefined)
        		 $state.transitionTo(obj.url);
        }

        
        });



