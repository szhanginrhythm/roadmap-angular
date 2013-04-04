/*global define */

define([], function () {
    return ['roadmapFormDirective', function (version) {
        return function (scope, elm, attrs) {
            elm.text(roadmapFormDirective);
        };
    }];
});
