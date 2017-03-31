angular.module("controllers",[])
//today的控制器
.controller("TodayCtrl",["$scope","$http","$rootScope","$filter",function($scope,$http,$rootScope,$filter){
	$rootScope.title = $rootScope.navs[0];
	var today = $filter('date')(new Date, 'yyyy-MM-dd');
	$rootScope.loaded = true;
	$http({
		url : "api/today.php",
		params : {today:today}
	}).then(function(result){
		$rootScope.loaded = false;
		$rootScope.time = result.data.date
		$scope.posts = result.data.posts;
	})
}])
//前一天的控制器
.controller("OlderCtrl",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title = $rootScope.navs[1];
	$rootScope.loaded = true;
	$http({
		url : "api/older.php",
	}).then(function(result){
		console.log(result.data)
		$rootScope.loaded = false;
		$rootScope.time = result.data.date
		$scope.posts = result.data.posts;
	})
}])


