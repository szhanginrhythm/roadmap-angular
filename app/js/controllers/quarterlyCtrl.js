/*global define */

define(['services/utilService'], function () {
    return ['QuarterlyCtrl', ['$scope', 'utilService',
        function ($scope, utilService) {

            $scope.title = 'Create Your Roadmap';

            $scope.months = utilService.getMonth();

        }]];
});
