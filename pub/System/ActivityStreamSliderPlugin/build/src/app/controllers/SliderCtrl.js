angular.module('ngActivityStreamSlider').controller('SliderCtrl', ["$scope", "$location", "$timeout", "aggregatedService", "singleService", function SliderCtrl($scope, $location, $timeout, aggregatedService, singleService) {
    $scope.aggregated_view = true;
    $scope.setAggregated = function(value) {
    	if(value && $scope.aggregated_view != value){
    		$scope.aggregated_items = [];
    		aggregatedService.flush();
    		load_aggregated_items();
    	} 
    	if(!value && $scope.aggregated_view != value){
    		$scope.single_items = [];
    		singleService.flush();
    		load_single_items();
    	}
        $scope.aggregated_view = value;
    };

    var load_aggregated_items = function() {
        var items = aggregatedService.get_updates();
        items.then(function(items_arr) {
        	$timeout(function(){
        		$scope.aggregated_items = items_arr;
        	});
            
        }, function(error) {
            deferred.reject(error);
        });
    }

    $scope.aggregated_items = [];

    $scope.$on('load_aggregated', function(event) { 
    	load_aggregated_items();
    	load_single_items();
    });

    
    $scope.load_more_aggregated = load_aggregated_items;

    $scope.toggle_status_agg = function(index){
    	var promise = aggregatedService.toggle_status($scope.aggregated_items[index]);
    	promise.then(function(result){
    		$scope.aggregated_items[index].read = !$scope.aggregated_items[index].read;
    	}, function(error){

    	});
    }



    var load_single_items = function() {
        var items = singleService.get_updates();
        items.then(function(items_arr) {
        	$timeout(function(){
        		$scope.single_items = items_arr;
        	});
            
        }, function(error) {
            deferred.reject(error);
        });
    }

    $scope.single_items = [];
    
    $scope.load_more_single = load_single_items;

    $scope.toggle_status_single = function(index){
    	var promise = singleService.toggle_status($scope.single_items[index]);
    	promise.then(function(result){
    		$scope.single_items[index].read = !$scope.single_items[index].read;
    	}, function(error){

    	});
    }



}]);