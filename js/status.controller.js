(function() {
    "use strict";

    angular
        .module('solr')
        .controller('StatusController', StatusController);

    StatusController.$inject = ['$scope', '$firebaseObject'];

    function StatusController($scope, $firebaseObject) {
        $scope.loaded = false;

        var firebaseRef = new Firebase("https://solr.firebaseio.com/");
        var obj = $firebaseObject(firebaseRef);
        obj.$loaded().then(function() {
             $scope.loaded = true;
        });

        $scope.status = obj;
    }

})();
