//先声明一个angular的模块
var Yike = angular.module("Yike", ["ngRoute", "controllers", "directives"]);
Yike.run(["$rootScope", function($rootScope) {
	//控制加载动画的变量
	$rootScope.loaded = true;
	//设置导航栏
	$rootScope.navs = ['今日一刻', '往期内容', '热门作者', '栏目浏览', '我的喜欢', '设置'];
	//设置控制动画类的flag，点击添加和删除类
	$rootScope.flag = false;
	$rootScope.index = 1;
	$rootScope.clickHandel = function(num) {
		//点击菜单被选中的代码
		if(num) {
			console.log(num)
			//控制选中的变量
			$rootScope.index = num;
		}

		//控制添加动画类的flag变量
		$rootScope.flag = !$rootScope.flag;
		var navs = document.querySelectorAll(".navs dd");
		//菜单的缓动的特效
		if($rootScope.flag) {
			//滑出来；从第一个开始滑动时间递加
			for(var i = 0; i < navs.length; i++) {
				navs[i].style.transform = "translateX(0)";
				navs[i].style.transitionDuration = 0.02 * (i + 1) + "s";
				navs[i].style.transitionDelay = ".5s";
			}
		} else {
			//滑进去；从第一个开始滑动时间递减
			for(var j = 0; j < navs.length; j++) {
				navs[j].style.transform = "translateX(-100%)";
				navs[j].style.transitionDuration = 0.02 * (navs.length - i - 1) + "s";
				navs[j].style.transitionDelay = "0";
			}
		}

	};
}]);
//配值路由
Yike.config(["$routeProvider", function($routeProvider) {
	$routeProvider.when('/0', {
		templateUrl: "view/today.html",
		controller: "TodayCtrl"
	}).when('/1', {
		templateUrl: "view/older.html",
		controller: "OlderCtrl"
	}).otherwise({ // 默认
        redirectTo: '/0'
    })
}]);