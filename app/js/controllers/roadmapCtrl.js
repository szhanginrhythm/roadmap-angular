/*global define */

define(['services/roadmapService', 'services/utilService'],
    function () {
        return ['RoadmapCtrl', ['$scope', '$routeParams', '$log', 'roadmapService', 'utilService', function ($scope, $routeParams, $log, roadmapService, utilService) {
            $scope.title = "Hello " + $routeParams.roadmap_id;
        }]];
    });
