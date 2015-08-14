var controllerProvider = null;
angular.module('ngActivityStreamSlider', [
    'templates-app',
    'templates-common',
    'angularMoment',
    'ngAnimate'
])

.config(function myAppConfig($controllerProvider) {
    controllerProvider = $controllerProvider;
})

.run(function run(amMoment) {
	amMoment.changeLocale('de');
})


;

angular.element(document).ready(function() {
    angular.bootstrap(document, ['ngActivityStreamSlider']);
    $('<div id="ActivityStreamSlider" ng-controller="SliderCtrl"><sidebar id="sidebar"></sidebar></div>').appendTo('body');
    
});

