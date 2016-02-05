var controllerProvider = null;
angular.module('ngActivityStreamSlider', [
    'templates-app',
    'templates-common',
    'angularMoment',
    'ngAnimate',
    'ngSanitize'
])

.config(['$controllerProvider', '$locationProvider', function myAppConfig($controllerProvider, $locationProvider) {
    controllerProvider = $controllerProvider;
    $locationProvider.html5Mode({
        enabled : true,
        requireBase: false,
        rewriteLinks : false
    });
}])

.run(['amMoment', function run(amMoment) {
	amMoment.changeLocale('de');
}])


;

jQuery(function($) {
    $('<div id="ActivityStreamSlider" ng-controller="SliderCtrl"><sidebar id="sidebar"></sidebar>').appendTo('body');
    angular.bootstrap(document, ['ngActivityStreamSlider']);
});

