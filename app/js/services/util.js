'use strict';

define([], function (utilService) {

    var utilService = {};

    utilService.saveToLocal = function (key, value) {
        if (window.localStorage) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            Cookie.write(key, JSON.stringify(value));
        }
    }

    utilService.getFromLocal = function (key) {
        var value = window.localStorage? localStorage.getItem(key): Cookie.read(key);
        if (value && value !== 'undefined') {
            return JSON.parse(value);
        } else {
            return [];
        }
    }

    return utilService;
});