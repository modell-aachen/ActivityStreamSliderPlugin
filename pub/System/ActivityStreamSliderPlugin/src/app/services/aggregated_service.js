(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('aggregatedService', ['$http', '$q', 'aggregatedModelMockService', aggregatedService]);


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

        var num = 10;

        var ids = {};

        function get_updates() {
            var deferred = $q.defer();

            var new_items = aggregatedModelMockService.fetch_items(num,offset);
            new_items.then(function(result) {
                // we have to make sure that ids do not appear twice. This can
                // happen, when loading second page but a new item was created
                // in the meantime (result jumped from page 1 to 2).
                $(result.items).each(function(idx, item) {
                    if(ids[item.id]) return;
                    ids[item.id] = 1;
                    items.push(item);
                    offset++;
                });
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
            ids = {};
            offset = 0;
        }

        function get_total_unread(){
            return aggregatedModelMockService.get_total_unread();
        }

        ////////////

        return service;

    }


})();
