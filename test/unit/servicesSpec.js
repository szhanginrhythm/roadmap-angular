/*global define, describe, beforeEach, it, expect */

define([
    'angular',
    'angularMocks',
    'app'
], function (angular, mocks, app) {
    'use strict';

    describe('service', function () {
        beforeEach(mocks.module('productRoadmap.services'));
        describe('version', function () {
            it('should return current version', mocks.inject(function (version) {
                expect(version).toEqual('0.1');
            }));
        });
    });
});
