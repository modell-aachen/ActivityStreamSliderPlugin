angular.module('templates-app', ['templates/sidebar.tpl.html', 'templates/slider_aggregated.tpl.html', 'templates/slider_single.tpl.html', 'templates/slider_tabs.tpl.html', 'templates/sliderheader.tpl.html']);

angular.module("templates/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/sidebar.tpl.html",
    "<div id=\"sidebar-wrapper\" class=\"sidebar-wrapper\">\n" +
    "    <div ng-include=\"'templates/sliderheader.tpl.html'\"></div>\n" +
    "    \n" +
    "    <div ng-show=\"aggregated_view\" ng-include=\"'templates/slider_aggregated.tpl.html'\"></div>\n" +
    "    <div ng-hide=\"aggregated_view\" ng-include=\"'templates/slider_single.tpl.html'\"></div>\n" +
    "\n" +
    "    \n" +
    "   \n" +
    "</div>\n" +
    "");
}]);

angular.module("templates/slider_aggregated.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/slider_aggregated.tpl.html",
    "<table class=\"aggregated_list\">\n" +
    "    <tr class=\"aggregated_content\" ng-class=\"{unread: !item.read, read: item.read}\" ng-repeat=\"item in aggregated_items track by item.id\">\n" +
    "        <td>\n" +
    "            <div >\n" +
    "                <a ng-href=\"/{{item.path}}\"><h2>{{item.title}}</h2></a>\n" +
    "                <ul>\n" +
    "                    <li ng-repeat=\"change in item.changes\"><span style=\"color:grey;font-size:0.8em;\"><span  am-time-ago=\"change.created\" am-preprocess=\"unix\"></span> - {{change.actor}}</span><br>{{change.description}}</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "        <i ng-click=\"toggle_status_agg($index)\" class=\"fa fa-3x\" ng-class=\"{'fa-square-o': !item.read, 'fa-check-square': item.read}\"></i>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "<div style=\"text-align:center;margin-top:20px;margin-bottom:10px;\"><button ng-click=\"load_more_aggregated()\" type=\"button\" class=\"btn btn-default\">Weitere laden</button></div>\n" +
    "\n" +
    "");
}]);

angular.module("templates/slider_single.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/slider_single.tpl.html",
    "<table class=\"aggregated_list\">\n" +
    "    <tr class=\"aggregated_content\" ng-class=\"{unread: !item.read, read: item.read}\" ng-repeat=\"item in single_items track by item.id\">\n" +
    "        <td>\n" +
    "            <div >\n" +
    "                <a ng-href=\"/{{item.path}}\"><h2>{{item.title}}</h2></a>\n" +
    "                <ul>\n" +
    "                    <li><span style=\"color:grey;font-size:0.8em;\"><span  am-time-ago=\"item.created\" am-preprocess=\"unix\"></span> - {{item.actor}}</span><br>{{item.description}}</li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "        <i ng-click=\"toggle_status_single($index)\" class=\"fa fa-3x\" ng-class=\"{'fa-square-o': !item.read, 'fa-check-square': item.read}\"></i>\n" +
    "        </td>\n" +
    "    </tr>\n" +
    "</table>\n" +
    "<div style=\"text-align:center;margin-top:20px;margin-bottom:10px;\"><button ng-click=\"load_more_single()\" type=\"button\" class=\"btn btn-default\">Weitere laden</button></div>\n" +
    "\n" +
    "");
}]);

angular.module("templates/slider_tabs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/slider_tabs.tpl.html",
    "<div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\n" +
    "  <div class=\"btn-group\" role=\"group\">\n" +
    "    <button ng-click=\"setAggregated(true)\" type=\"button\" class=\"btn \" ng-class=\"{'btn-success': aggregated_view, 'btn-default': !aggregated_view}\">Alle</button>\n" +
    "  </div>\n" +
    "  <div class=\"btn-group\" role=\"group\">\n" +
    "    <button ng-click=\"setAggregated(false)\" type=\"button\" class=\"btn \" ng-class=\"{'btn-success': !aggregated_view, 'btn-default': aggregated_view}\">Archiv</button>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("templates/sliderheader.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/sliderheader.tpl.html",
    "<div id=\"slider_header\">\n" +
    "<a class=\"close-sidebar\" href=\"#\"><i class=\"fa fa-times\"> </i> Schließen</a>\n" +
    "	<h1>Letzte Aktualisierungen</h1>\n" +
    "	<div ng-include=\"'templates/slider_tabs.tpl.html'\"></div>\n" +
    "</div>");
}]);
