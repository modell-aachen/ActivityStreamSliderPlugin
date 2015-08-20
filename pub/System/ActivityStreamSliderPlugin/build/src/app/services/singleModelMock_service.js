(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('singleModelMockService', singleModelMockService);


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
            },
            {
                id: '12334wdfsdr12',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Vertriebsprozess',
                created: 1439543178,
                read: true,
                actor: 'AlexanderStoffers',
                verb: 'KVP',
                description: 'Neuer freigebener Stand'
            },
            {
                id: '12334wdfsdr13',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Teamsegeln',
                created: 1439540278,
                read: true,
                actor: 'DanielThulfaut',
                verb: 'NEW_DISCUSSION',
                description: 'Neue Diskussion eröffnet'
            },
            {
                id: '12334wdfsdr14',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                created: 1439543278,
                read: true,
                actor: 'CarstenBehrens',
                verb: 'COMMENT',
                description: 'Neuer Kommentar von CarstenBehrens'
            },
            {
                id: '12334wdfsdr15',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Vertriebsprozess',
                created: 1439543178,
                read: true,
                actor: 'AlexanderStoffers',
                verb: 'KVP',
                description: 'Neuer freigebener Stand'
            },
            {
                id: '12334wdfsdr16',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Teamsegeln',
                created: 1439540278,
                read: true,
                actor: 'DanielThulfaut',
                verb: 'NEW_DISCUSSION',
                description: 'Neue Diskussion eröffnet'
            },
            {
                id: '12334wdfsdr17',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                created: 1439543278,
                read: true,
                actor: 'CarstenBehrens',
                verb: 'COMMENT',
                description: 'Neuer Kommentar von CarstenBehrens'
            },
            {
                id: '12334wdfsdr18',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Vertriebsprozess',
                created: 1439543178,
                read: true,
                actor: 'AlexanderStoffers',
                verb: 'KVP',
                description: 'Neuer freigebener Stand'
            },
            {
                id: '12334wdfsdr19',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Teamsegeln',
                created: 1439540278,
                read: true,
                actor: 'DanielThulfaut',
                verb: 'NEW_DISCUSSION',
                description: 'Neue Diskussion eröffnet'
            },
            {
                id: '12334wdfsdr20',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                created: 1439543278,
                read: true,
                actor: 'CarstenBehrens',
                verb: 'COMMENT',
                description: 'Neuer Kommentar von CarstenBehrens'
            },
            {
                id: '12334wdfsdr21',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Vertriebsprozess',
                created: 1439543178,
                read: true,
                actor: 'AlexanderStoffers',
                verb: 'KVP',
                description: 'Neuer freigebener Stand'
            },
            {
                id: '12334wdfsdr22',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Teamsegeln',
                created: 1439540278,
                read: true,
                actor: 'DanielThulfaut',
                verb: 'NEW_DISCUSSION',
                description: 'Neue Diskussion eröffnet'
            },
            {
                id: '12334wdfsdr23',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                created: 1439543278,
                read: true,
                actor: 'CarstenBehrens',
                verb: 'COMMENT',
                description: 'Neuer Kommentar von CarstenBehrens'
            },
            {
                id: '12334wdfsdr24',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Vertriebsprozess',
                created: 1439543178,
                read: true,
                actor: 'AlexanderStoffers',
                verb: 'KVP',
                description: 'Neuer freigebener Stand'
            },
            {
                id: '12334wdfsdr25',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Teamsegeln',
                created: 1439540278,
                read: true,
                actor: 'DanielThulfaut',
                verb: 'NEW_DISCUSSION',
                description: 'Neue Diskussion eröffnet'
            }


            ]
        };

        function fetch_items(num, offset) {
            var deferred = $q.defer();
            var result = angular.copy(mock_data);
            result.num_items = num;
            result.items = result.items.slice(offset, offset + num);
            deferred.resolve(result);
            
            return deferred.promise;

        }

        function set_read(){
            var deferred = $q.defer();
            deferred.resolve(true);
            return deferred.promise;
        }

        function set_unread(){
            var deferred = $q.defer();
            deferred.resolve(true);
            return deferred.promise;
        }


        ////////////
        return service;

    }
    singleModelMockService.$inject = ["$http", "$q", "$timeout"];


})();