(function() {
    "use strict";

    angular.module('solr', ["firebase"]);

    angular
        .module('solr')
        .controller('StatusController', StatusController);

    StatusController.$inject = ['$scope', '$firebaseObject'];

    function StatusController($scope, $firebaseObject) {
        var firebaseRef = new Firebase("https://solr.firebaseio.com/");
        $scope.status = $firebaseObject(firebaseRef);
    }

})();
