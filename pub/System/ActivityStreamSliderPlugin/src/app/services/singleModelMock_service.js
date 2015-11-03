(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('singleModelMockService', ['$http', '$q', '$timeout', singleModelMockService]);


    function singleModelMockService($http, $q, $timeout) {
        var service = {
            fetch_items: fetch_items,
            set_read: set_read,
            set_unread: set_unread
        };


        ////////////

        var mock_data = {
            num_items: 5,
            items: [
            {
                id: '12334wdfsdr11',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                created: 1439543278,
                read: true,
                actor: 'CarstenBehrens',
                verb: 'COMMENT',
                description: 'Neuer Kommentar von CarstenBehrens'
            }
            ]
        };

        function fetch_items(count, offset) {
            var deferred = $q.defer();

            var url= foswiki.getPreference('SCRIPTURL') + '/rest' + foswiki.getPreference('SCRIPTSUFFIX') + '/WikiActivityPlugin/subscribed_events';
            $.ajax({
                cache:false,
                url: url,
                data: {
                    all: 1,
                    count: count,
                    offset: offset
                },
                success: function(data, textstatus, jqXHR) {
                    var result = {};
                    result.num_items = data.data.length; // TODO offset etc
                    result.items = data.data;

                    // XXX rewrites
                    $.each(result.items, function(idx, item) {
                        item.path = item.topic;
                        var details = window.JSON.parse(item.details);
                        var args = [details.description.namespace, details.description.string];
                        $.each(details.description.args, function(idx, item) { args.push(item); });
                        var description = window.jsi18n.get.apply(window.jsi18n, args);
                        description = description.replace(/%SCRIPTURL\{([^}]+)\}%/g, foswiki.getPreference('SCRIPTURL') + '/$1' + foswiki.getPreference('SCRIPTSUFFIX'));
                        description = description.replace(/%SCRIPTURLPATH\{([^}]+)\}%/g, foswiki.getPreference('SCRIPTURLPATH') + '/$1' + foswiki.getPreference('SCRIPTSUFFIX'));
                        item.description = description;
                    });

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
            var t = parseInt(item.event_time) + 1;

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

            var t = item.event_time;

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

        ////////////
        return service;

    }


})();
