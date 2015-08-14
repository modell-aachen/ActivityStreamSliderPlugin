angular.module('ngActivityStreamSlider')

.directive('sidebar', function() {

    return {
        templateUrl: 'templates/sidebar.tpl.html',
        restrict: 'E',

        link: function(scope, element, attrs) {

            $(element[0]).simplerSidebar({
                opener: '#toggle-sidebar',
                sidebar: {
                    align: 'right',
                    width: 400,
                    closingLinks: '.close-sidebar'
                }
            });

        }
    };
})

;