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
            var next_id;
            if (type === "Monthly") {
                $scope.durations = utilService.getMonths();
            } else {
                $scope.durations = utilService.getQuarters();
            }
            next_id = $scope.roadmaps[$scope.roadmaps.length - 1].id + 1;
            $scope.roadmap = {
                id : next_id,
                themes : [],
                startDate : $scope.durations[0],
                type : type
            }
        };

        $scope.deleteRoadmap = function (id) {
            roadmapService.deleteRoadmapById(id);
        };

        $scope.saveRoadmap = function () {
            //Sanitize the values
            $scope.roadmap.startDate = utilService.getMonthIndex($scope.roadmap.startDate);

            roadmapService.addRoadmap($scope.roadmap);
            $scope.reset();
        };
    }]];
});
