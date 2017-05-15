angular.module('starter')
    .factory('LoginService', function ($rootScope,$cordovaOauth,$http, $window, $q, $log, $ionicLoading) {
  
  return {
    GetUserProfile: function(access_token) {
     return  $http.get("https://graph.facebook.com/v2.2/me",
              	 {params: {access_token: access_token, fields: "name,gender,location,picture,email", 
				 format: "json" }})

  },
  Logout: function(){
	     localStorage.clear();
	  }
		  
	  
  }
  
  });
