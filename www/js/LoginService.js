angular.module('starter')
    .factory('LoginService', function ($rootScope,$cordovaOauth,$http, $window, $q, $log, $ionicLoading) {
       var service = {
            token: '',
            GetAccessToken: GetAccessToken
        };
        return service;

	  function GetAccessToken(){
		  var def = $q.defer();
       
	
	   }

  });
