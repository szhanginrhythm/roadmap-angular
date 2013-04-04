/*global define */

define(['services/utilService'], function (utilService) {
    return ['themeService', ['utilService', function (utilService) {

        var key = 'themes',
            themes = utilService.getFromLocal(key);

        return {
            getThemes: function () {
                return themes;
            },
            addThemeToProduct: function () {

            }
        };
    }]];
});
