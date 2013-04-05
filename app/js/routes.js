/*global define */

define(['angular', 'app', 'config'], function (angular, app, config) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/',
            config.getResolveRoute({
                templateUrl: 'app/partials/list.html',
                controllerName: 'RoadmapListCtrl',
                controllerFile: 'controllers/roadmapListCtrl',
                serviceFiles: ['services/roadmapService', 'services/utilService']
            })
            );

        $routeProvider.when('/roadmap/:roadmap_id',
            config.getResolveRoute({
                templateUrl: 'app/partials/roadmap.html',
                controllerName: 'RoadmapCtrl',
                controllerFile: 'controllers/roadmapCtrl',
                serviceFiles: ['services/utilService', 'services/roadmapService'],
                filterFiles: ['filters/storyFilter']
            })
            );

        /**
        $routeProvider.when('/quarterly',
            config.getResolveRoute({
                templateUrl: 'app/partials/list.html',
                controllerName: 'quarterlyCtrl',
                controllerFile: 'controllers/quarterlyCtrl',
                serviceFiles: ['services/utilService']
            })
            );
        **/
    }]);

});
