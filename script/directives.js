angular.module("directives",[])
//定义一个生成加载动画的指令
.directive("myLoading",function(){
	return {
		restrict: 'A',
        template: '<img ng-if="loaded" class="loading" src="./public/images/loading.gif" style="width: 3rem; margin: 0 auto;" />'
	}
})