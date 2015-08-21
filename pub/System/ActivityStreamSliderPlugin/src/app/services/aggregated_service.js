(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('aggregatedService', aggregatedService);


    function aggregatedService($http, $q, aggregatedModelMockService) {
        var service = {
            get_updates: get_updates,
            toggle_status: toggle_status,
            flush: flush,
            get_total_unread: get_total_unread
        };

        ////////////
        
        var items = [];

        var offset = 0;

        var num = 2;

        function get_updates() {
            var deferred = $q.defer();
            
            var new_items = aggregatedModelMockService.fetch_items(num,offset);
            new_items.then(function(result) {
                        items = items.concat(result.items);
                        offset += result.num_items;
                        deferred.resolve(items);
            }, function(error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function toggle_status(item) {
            if(item.read){
                return aggregatedModelMockService.set_unread(item);
            } else {
                return aggregatedModelMockService.set_read(item);
            }
        }

        function flush(){
            items = [];
            offset = 0;
        }

        function get_total_unread(){
            return aggregatedModelMockService.get_total_unread();
            
        }



        ////////////
        return service;

    }


})();
