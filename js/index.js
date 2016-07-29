var app=angular.module('router.module', []);

app.controller("routerCtrl",['$scope',
	function($scope){

}]);

app.factory("httpRequestFactory",function($http,$q){
	var obj={};
	var apiBaseUrl="http://localhost:3000";
	obj.getRequest=function(){

	}
	obj.postRequest=function(){

	}
	obj.putRequest=function(){

	}

	obj.deleteRequest=function(){

	}
});