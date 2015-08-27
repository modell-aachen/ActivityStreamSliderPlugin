(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('aggregatedModelMockService', ['$http', '$q', '$timeout', aggregatedModelMockService]);


    function aggregatedModelMockService($http, $q, $timeout) {
        var service = {
            fetch_items: fetch_items,
            set_read: set_read,
            set_unread: set_unread,
            get_total_unread: get_total_unread
        };

        function fetch_items(num, offset) {
            var deferred = $q.defer();

            var url= foswiki.getPreference('SCRIPTURL') + '/rest' + foswiki.getPreference('SCRIPTSUFFIX') + '/WikiActivityPlugin/subscribed_events_grouped';
            $.ajax({
                url: url,
                success: function(data, textstatus, jqXHR) {
                    var result = {};
                    result.num_items = data.data.length; // TODO offset etc
                    result.items = data.data;

                    // XXX rewrites
                    $.each(result.items, function(idx, item) {
                        item.path = item.topic;
                        item.read = false;
                        item.changes = [];
                        if(!item.id) item.id = item.base;
                        $.each(item.events, function(idx, event) {
                            var details = window.JSON.parse(event.details);
                            var args = [details.description.namespace, details.description.string];
                            $.each(details.description.args, function(idx, item) { args.push(item); });
                            var description = window.jsi18n.get.apply(window.jsi18n, args);
                            description = description.replace(/%SCRIPTURL\{([^}]+)\}%/g, foswiki.getPreference('SCRIPTURL') + '/$1' + foswiki.getPreference('SCRIPTSUFFIX'));
                            description = description.replace(/%SCRIPTURLPATH\{([^}]+)\}%/g, foswiki.getPreference('SCRIPTURLPATH') + '/$1' + foswiki.getPreference('SCRIPTSUFFIX'));
                            item.changes[idx] = {description: description};
                        });
                    });
                    console.log(result); // XXX

                    deferred.resolve(result);
                },
                error: function(jqxhr, textstatus, error) {
                    deferred.reject(textstatus); // XXX
                }
            });

            return deferred.promise;

        }

        function set_read(item){
            var deferred = $q.defer();

            var t = parseInt(item.maxtime) + 1;

            var url= foswiki.getPreference('SCRIPTURL') + '/rest' + foswiki.getPreference('SCRIPTSUFFIX') + '/WikiActivityPlugin/update_subscription';
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    base: item.base,
                    ts: t
                },
                success: function(data, textstatus, jqXHR) {
                    deferred.resolve(true);
                },
                error: function(jqxhr, textstatus, error) {
                    deferred.reject(false); // XXX
                }
            });

            return deferred.promise;
        }

        function set_unread(item) {
            var deferred = $q.defer();

            var t = item.mintime;

            var url= foswiki.getPreference('SCRIPTURL') + '/rest' + foswiki.getPreference('SCRIPTSUFFIX') + '/WikiActivityPlugin/update_subscription';
            $.ajax({
                url: url,
                type: 'POST',
                data: {
                    base: item.base,
                    ts: t
                },
                success: function(data, textstatus, jqXHR) {
                    deferred.resolve(true);
                },
                error: function(jqxhr, textstatus, error) {
                    deferred.reject(false); // XXX
                }
            });

            return deferred.promise;
        }

        function get_total_unread(){
            var deferred = $q.defer();

            var url= foswiki.getPreference('SCRIPTURL') + '/rest' + foswiki.getPreference('SCRIPTSUFFIX') + '/WikiActivityPlugin/subscribed_events_count';
            $.ajax({
                url: url,
                success: function(data, textstatus, jqXHR) {
                    deferred.resolve(data.data.event_bases);
                },
                error: function(jqxhr, textstatus, error) {
                    deferred.reject(textstatus); // XXX
                }
            });

            return deferred.promise;

        }


        ////////////
        return service;

    }


})();
