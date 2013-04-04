/*global define */

define(['angular', 'app', 'config'], function (angular, app, config) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/monthly',
            config.getResolveRoute({
                templateUrl: 'app/partials/monthly.html',
                controllerName: 'MonthlyCtrl',
                controllerFile: 'controllers/monthlyCtrl',
                serviceFiles: ['services/utilService']
            })
            );

        $routeProvider.when('/quarterly',
            config.getResolveRoute({
                templateUrl: 'app/partials/quarterly.html',
                controllerName: 'quarterlyCtrl',
                controllerFile: 'controllers/quarterlyCtrl',
                serviceFiles: ['services/utilService']
            })
            );
    }]);

});
