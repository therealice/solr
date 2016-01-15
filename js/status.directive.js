(function() {
    "use strict";

    angular
        .module('solr')
        .directive('status', status);

    status.$inject = [];

    function status() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'template/status.directive.html',
            scope: {
                data: '='
            }
        };

        return directive;
    }

})();