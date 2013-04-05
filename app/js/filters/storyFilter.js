/*global define, angular */

define(['services/utilService'], function (utilService) {
    return [ 'storyFilter', [function () {
        return function (input, search) {
            console.log(input);
            var return_val;
            angular.forEach(input, function (story, value) {
                if (story.date.month === search.date.month
                        && story.date.year === search.date.year) {
                    return_val = story;
                    return;
                }
            });
            return input;
        };
    }]];
});
