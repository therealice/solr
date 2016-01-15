(function() {
    "use strict";

    angular
        .module('solr')
        .directive('timeago', timeago);

    timeago.$inject = ['$interval'];

    function timeago($interval) {
        var directive = {
            restrict: 'EA',
            templateUrl: 'template/timeago.directive.html',
            link: link,
            scope: {
                time: '='
            }
        };

        return directive;

        function link(scope, element, attr) {
            scope.timeago = moment(scope.time).fromNow();

            $interval(function() {
                scope.timeago = moment(scope.time).fromNow();
            }, 1000);
        }
    }

})();