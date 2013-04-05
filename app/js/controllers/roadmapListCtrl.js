/*global define */

define(['services/roadmapService', 'services/utilService'], function () {
    return ['RoadmapListCtrl', ['$scope', '$log', 'roadmapService', 'utilService', function ($scope, $log, roadmapService, utilService) {

        $scope.title = 'Roadmap List';

        $scope.roadmaps = roadmapService.getRoadmaps();

        $scope.formattedDate = function (roadmap) {
            return utilService.getFormattedDate(roadmap.type, roadmap.startDate);
        };

        // $scope.months = utilService.getMonths();
        // $scope.quarters = utilService.getQuarters();

        $scope.reset = function () {
            $scope.roadmap = undefined;
        };

        $scope.createNew = function (type) {
            if (type === "Monthly") {
                $scope.durations = utilService.getMonths();
            } else {
                $scope.durations = utilService.getQuarters();
            }
            $scope.roadmap = {};
            $scope.roadmap.id = $scope.roadmaps.length + 1;
            $scope.roadmap.startDate = $scope.durations[0];
            $scope.roadmap.type = type;
        };

        $scope.saveRoadmap = function () {
            //Sanitize the values
            $scope.roadmap.startDate = utilService.getMonthIndex($scope.roadmap.startDate);

            roadmapService.addRoadmap($scope.roadmap);
            $scope.reset();
        };
    }]];
});
