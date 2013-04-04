/*global define */

define([
    'angular',
    'filters',
    'services',
    'directives',
    'controllers',
    'config'
], function (angular, filters, services, directives, controllers, config) {
    'use strict';

    return angular.module('productRoadmap',
        ['productRoadmap.controllers', 'productRoadmap.filters', 'productRoadmap.services', 'productRoadmap.directives'],
        function ($controllerProvider, $compileProvider, $provide, $filterProvider) {
            config.setAllProviders({
                controllerProvider: $controllerProvider,
                compileProvider: $compileProvider,
                provide: $provide,
                filterProvider: $filterProvider
            });
        });

});
