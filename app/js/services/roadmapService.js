/*global define */
 
define(['services/utilService'], function (utilService) {
    return ['roadmapService', ['utilService', function (utilService) {

        var key = 'roadmaps',
            roadmaps = utilService.getFromLocal(key);

        return {
            getRoadmaps: function () {
                return roadmaps;
            },
            addRoadmap: function (roadmap) {
                roadmaps.push(roadmaps);
                utilService.saveToLocal(key, roadmaps);
            }
        };
    }]];
});
