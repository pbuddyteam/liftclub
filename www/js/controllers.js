angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state, $ionicModal, $cordovaOauth,$timeout,LoginService) {
	if(localStorage.getItem('access_token')===null){
		alert('not logged in');
		
		
	}
	else{
	$state.go('app.home'); 
		
		//alert('loggedin'+localStorage.getItem('access_token'))
	}
		$scope.GetFacebook = function(){
		 $cordovaOauth.facebook("235133553636318", ["email",'user_relationships','public_profile']).then(function(result) {
          localStorage.setItem('access_token',result.access_token);
		  alert(result)

		}, function(error) {
			alert("Auth Failed..!!"+error);
		});	
		}

})

.controller('HomeCntr', function($scope,$ionicSideMenuDelegate, $cordovaOauth, $ionicModal,$ionicActionSheet, $timeout, $http, $log,$state, $location, $ionicPopup, $compile,$ionicLoading) {
displayData($http, localStorage.getItem('access_token'))
			
		
			
	
	
		function displayData($http, access_token)
{
    $http.get("https://graph.facebook.com/v2.2/me", {params: {access_token: access_token, fields: "name,gender,location,picture", format: "json" }}).then(function(result) {
        var name = result.data.name;
        var gender = result.data.gender;
        var picture = result.data.picture;

     var html= name + " "+gender;
 
     $scope.pic=picture.data.url;
     $scope.oath=html;
 
    }, function(error) {
        alert("Error: " + error);
    });
}
  
					
	 }
	 //***********************End**********************************///
);
