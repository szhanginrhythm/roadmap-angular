/*global define */
 
define(['services/utilService'], function (utilService) {
    return ['roadmapService', ['utilService', function (utilService) {

//        roadmap {
//            name: '',
//            type: 'Monthly' or 'Quarterly',
//            startTime: 'M/Y'
//            themes: [
//                      {
//                          name:
//                          stories: [
//                                      {
  //                                     time:
//                                       details: [d1, d2, d3]
//                                      }

//                                      ]
//                      }
//                    ]
//        }

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
