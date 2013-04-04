'use strict';

define(['services/utilService'], function(utilService){
    return ['themeService', ['utilService', function(utilService){

        var key = 'themes';
        var themes = utilService.getFromLocal(key);

        return {
            getThemes: function () {
                return themes;
            },
            addThemeToProduct: function () {

            }
        };
    }]];
});