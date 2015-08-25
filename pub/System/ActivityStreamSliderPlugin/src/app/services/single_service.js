(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('singleService', singleService);


    function singleService($http, $q, singleModelMockService) {
        var service = {
            get_updates: get_updates,
            toggle_status: toggle_status,
            flush: flush
        };

        ////////////
        
        var items = [];

        var offset = 0;

        var num = 2;

        function get_updates() {
            var deferred = $q.defer();
            
            var new_items = singleModelMockService.fetch_items(num,offset);
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
                return singleModelMockService.set_unread(item);
            } else {
                return singleModelMockService.set_read(item);
            }
        }

          function flush(){
            items = [];
            offset = 0;
        }



        ////////////
        return service;

    }


})();
