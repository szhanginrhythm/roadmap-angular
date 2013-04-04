/*global define */

define(['services/utilService'], function () {
    return ['MonthlyCtrl', ['$scope', 'utilService', function ($scope, utilService) {

        $scope.title = 'Monthly';

        $scope.months = utilService.getMonth();

    }]];
});
