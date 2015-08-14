(function() {
    angular
        .module('ngActivityStreamSlider')
        .factory('aggregatedModelMockService', aggregatedModelMockService);


    function aggregatedModelMockService($http, $q, $timeout) {
        var service = {
            fetch_items: fetch_items,
            set_read: set_read,
            set_unread: set_unread,
            get_total_unread: get_total_unread
        };


        ////////////

        var mock_data = {
            num_items: 5,
            items: [{
                id: '12334wdfsdr34',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439543278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439543178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439542278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr35',
                path: 'Processes/Vertrieb/UserPflegen',
                title: 'User anlegen',
                last_change: 1439533278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439533278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439533178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439532278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr36',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Angebot erstellen',
                last_change: 1439523278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439523278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439523178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439522278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr37',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Investition beantragen',
                last_change: 1439543278,
                read: true,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439513278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439513178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439512278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr38',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Handwerkerfrühstück',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439503278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439503178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439502278,
                    description: 'Neue Diskussion eröffnet'
                }
                ]
            },
                {
                id: '12334wdfsdr12',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439543278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439543178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439542278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr13',
                path: 'Processes/Vertrieb/UserPflegen',
                title: 'User anlegen',
                last_change: 1439533278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439533278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439533178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439532278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr14',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Angebot erstellen',
                last_change: 1439523278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439523278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439523178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439522278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr15',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Investition beantragen',
                last_change: 1439543278,
                read: true,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439513278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439513178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439512278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr16',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Handwerkerfrühstück',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439503278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439503178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439502278,
                    description: 'Neue Diskussion eröffnet'
                }]
            },
            {
                id: '12334wdfsdr17',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439543278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439543178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439542278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr18',
                path: 'Processes/Vertrieb/UserPflegen',
                title: 'User anlegen',
                last_change: 1439533278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439533278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439533178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439532278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr19',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Angebot erstellen',
                last_change: 1439523278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439523278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439523178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439522278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr21',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Investition beantragen',
                last_change: 1439543278,
                read: true,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439513278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439513178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439512278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr22',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Handwerkerfrühstück',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439503278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439503178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439502278,
                    description: 'Neue Diskussion eröffnet'
                }]
            },
            {
                id: '12334wdfsdr23',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'CRM pflegen',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439543278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439543178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439542278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr24',
                path: 'Processes/Vertrieb/UserPflegen',
                title: 'User anlegen',
                last_change: 1439533278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439533278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439533178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439532278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr25',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Angebot erstellen',
                last_change: 1439523278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439523278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439523178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439522278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr26',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Investition beantragen',
                last_change: 1439543278,
                read: true,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439513278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439513178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439512278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }, {
                id: '12334wdfsdr27',
                path: 'Processes/Vertrieb/CrmPflegen',
                title: 'Handwerkerfrühstück',
                last_change: 1439543278,
                read: false,
                changes: [{
                    actor: 'CarstenBehrens',
                    verb: 'COMMENT',
                    created: 1439503278,
                    description: 'Neuer Kommentar von CarstenBehrens'
                }, {
                    actor: 'DanielThulfaut',
                    verb: 'KVP',
                    created: 1439503178,
                    description: 'Neuer freigebener Stand'
                }, {
                    actor: 'AlexanderStoffers',
                    verb: 'NEW_DISCUSSION',
                    created: 1439502278,
                    description: 'Neue Diskussion eröffnet'
                }]
            }]
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

        function get_total_unread(){
            var deferred = $q.defer();
            deferred.resolve(12);
            return deferred.promise;

        }


        ////////////
        return service;

    }


})();