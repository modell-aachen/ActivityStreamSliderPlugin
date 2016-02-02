angular.module('ngActivityStreamSlider').controller('ActivityButtonCtrl', ['$scope', '$location', '$rootScope', '$timeout', 'aggregatedService', function ActivityButtonCtrl($scope, $location, $rootScope, $timeout, aggregatedService) {
    $scope.load_items = function() {
        $rootScope.$broadcast('load_aggregated');
    };

    $scope.total_unread = '';

    function get_total_unread() {
        var promise = aggregatedService.get_total_unread();
        promise.then(function(total_unread) {
            $scope.total_unread = total_unread;
        }, function(error) {
            $scope.total_unread = 0;

        });
    }

    get_total_unread();

    setInterval(function(){
    	get_total_unread();
    }, 300000);





}]);
