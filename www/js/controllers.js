angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$state, $ionicModal, $cordovaOauth,$timeout,LoginService) {
	//check for access_token
	if(localStorage.getItem('access_token')===null){
	
	}
	else{
		//if token exist go home
	$state.go('app.home'); 
		
		
	}
	   //register using facebook
		$scope.GetFacebook = function(){
			$cordovaOauth.facebook("235133553636318", ["email",'user_relationships','public_profile']).then(function(result) {
			localStorage.setItem('access_token',result.access_token);
		    $state.go('app.home'); 

		}, function(error) {
			alert("Auth Failed..!!"+error);
		});	
		}

})

.controller('HomeCntr', function($scope,LoginService,$state,$ionicSideMenuDelegate,$ionicNavBarDelegate,$cordovaOauth, $ionicModal,$ionicActionSheet, $timeout, $http, $log,$state, $location, $ionicPopup, $compile,$ionicLoading) {
	$ionicNavBarDelegate.showBackButton(false);
	var access_token='';
	//check if token exist
	if(localStorage.getItem('access_token') ===null){
		//go to login
		alert("Test");
			$state.go('app.login'); 
	}
	else{
		//get user profile
		 access_token = localStorage.getItem('access_token');
		 //set user_profile
		LoginService.GetUserProfile(localStorage.getItem('access_token')).then(function(response){
		localStorage.setItem('user_profile',JSON.stringify(response.data));
		$scope.name=response.data.name;
	});		
	}			
}
	 //***********************End**********************************///
)
.controller('ProfileCtrl', function($scope,$state, $ionicModal, $cordovaOauth,$timeout,LoginService) {
	$scope.user_profile=JSON.parse(localStorage.getItem('user_profile'));
	$scope.picture= $scope.user_profile['picture'];
});
