(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('singleService', ['$http', '$q', 'singleModelMockService', singleService]);


    function singleService($http, $q, singleModelMockService) {
        var service = {
            get_updates: get_updates,
            toggle_status: toggle_status,
            flush: flush
        };

        ////////////

        var items = [];

        var offset = 0;

        var num = 10;

        var ids = {};

        function get_updates() {
            var deferred = $q.defer();

            var new_items = singleModelMockService.fetch_items(num,offset);
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
                return singleModelMockService.set_unread(item);
            } else {
                return singleModelMockService.set_read(item);
            }
        }

          function flush(){
            items = [];
            ids = {};
            offset = 0;
        }



        ////////////
        return service;

    }


})();
