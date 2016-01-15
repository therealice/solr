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
            var timeago = moment(scope.time);
            if(timeago.isValid()) {
                scope.timeago =  moment(scope.time).fromNow();
            }

            $interval(function() {
                var timeago = moment(scope.time);
                if(timeago.isValid()) {
                    scope.timeago =  moment(scope.time).fromNow();
                }
            }, 1000);
        }
    }

})();