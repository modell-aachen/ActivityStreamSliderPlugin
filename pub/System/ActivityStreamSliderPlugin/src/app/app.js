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

jQuery(function($) {
    $('<div id="ActivityStreamSlider" ng-controller="SliderCtrl"><sidebar id="sidebar"></sidebar>').appendTo('body');
    angular.bootstrap(document, ['ngActivityStreamSlider']);
});

