/*global define */

define(['services/utilService'], function () {
    return ['MonthlyCtrl', ['$scope', 'utilService', function ($scope, utilService) {

        $scope.title = 'Create Your Roadmap';

        $scope.months = utilService.getMonth();

    }]];
});
