var controllerProvider = null;
angular.module('ngActivityStreamSlider', [
    'templates-app',
    'templates-common',
    'angularMoment',
    'ngAnimate',
    'ngSanitize'
])

.config(function myAppConfig($controllerProvider) {
    controllerProvider = $controllerProvider;
})

.run(function run(amMoment) {
	amMoment.changeLocale('de');
})


;

angular.element(document).ready(function() {
	$('<div id="ActivityStreamSlider" ng-controller="SliderCtrl"><sidebar id="sidebar"></sidebar>').appendTo('body');
    setTimeout(function(){
    	 angular.bootstrap(document, ['ngActivityStreamSlider']);
    },100);
   
    
    
});

