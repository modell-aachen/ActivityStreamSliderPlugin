var controllerProvider = null;
angular.module('ngActivityStreamSlider', [
    'templates-app',
    'templates-common',
    'angularMoment',
    'ngAnimate'
])

.config(["$controllerProvider", function myAppConfig($controllerProvider) {
    controllerProvider = $controllerProvider;
}])

.run(["amMoment", function run(amMoment) {
	amMoment.changeLocale('de');
}])


;

angular.element(document).ready(function() {
	$('<div id="ActivityStreamSlider" ng-controller="SliderCtrl"><sidebar id="sidebar"></sidebar>').appendTo('body');
    setTimeout(function(){
    	 angular.bootstrap(document, ['ngActivityStreamSlider']);
    },100);
   
    
    
});

