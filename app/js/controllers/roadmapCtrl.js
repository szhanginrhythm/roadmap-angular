/*global define, angular */

define(['services/roadmapService', 'services/utilService'],
    function () {
        return ['RoadmapCtrl', ['$scope', '$routeParams', '$log', 'roadmapService', 'utilService', function ($scope, $routeParams, $log, roadmapService, utilService) {

            $scope.roadmap = roadmapService.getRoadmapById($routeParams.roadmap_id);

            $scope.periods = roadmapService.generateTimeperiods($scope.roadmap.type, $scope.roadmap.startDate);

            $scope.newDetail = {};

            $scope.createTheme = function () {
                $scope.theme = {
                    stories: []
                };
            };

            $scope.getStory = function (theme, period) {
                // if(story of that period, exists in theme, then reutrn it)
                // else: create a new story and return it
                angular.forEach(theme.stories, function (story, key) {
                    
                });
            };

            $scope.saveTheme = function () {
                roadmapService.addTheme($scope.roadmap, $scope.theme);
                $scope.theme = undefined;
            };

            $scope.createDetail = function (theme, period) {
                $scope.newDetail[theme.name + period.formatted] = {
                    text: ""
                };
            };
            
            $scope.saveDetail = function (theme, period) {
                // Check if Story exists, if it doesn't then create a new one
                // and then story the newDetail in it
                // var story = $scope.newDetail[theme.name + period.formatted];
                // roadmapService.addDetail(story, story.newDetail);
                var story = roadmapService.getStoryByThemeAndPeriod(theme, period);
                roadmapService.addDetail(story, $scope.newDetail[theme.name + period.formatted]);
                $scope.newDetail[theme.name + period.formatted] = undefined;
            };
        }]];
    });
