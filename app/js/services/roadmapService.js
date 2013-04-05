/*global define */
 
define(['services/utilService'], function (utilService) {
    return ['roadmapService', ['utilService', function (utilService) {

//        roadmap {
//            name: '',
//            type: 'Monthly' or 'Quarterly',
//            startDate: { 'month': m, 'year': y }
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
            getRoadmapById: function (id) {
                return roadmaps;
            },
            addRoadmap: function (roadmap) {
                roadmaps.push(roadmap);
                utilService.saveToLocal(key, roadmaps);
            },
            deleteRoadmap: function (roadmaps, roadmapIndex) {
                roadmaps.splice(roadmapIndex, 1);
                utilService.saveToLocal(key, roadmaps);
            },
            addTheme: function (roadmap, theme) {
                roadmap.themes.push(theme);
                utilService.saveToLocal(key, roadmaps);
            },
            deleteTheme: function (roadmap, themeIndex) {
                roadmap.themes.splice(themeIndex, 1);
                utilService.saveToLocal(key, roadmaps);
            },
            addStory: function (theme, story) {
                //Make sure that the stories are displayed in chronological
                //order using Angular Filter
                theme.stories.push(story);
                utilService.saveToLocal(key, roadmaps);
            },
            deleteStory: function (theme, storyIndex) {
                theme.stories.splice(storyIndex, 1);
                utilService.saveToLocal(key, roadmaps);
            },
            addDetail: function (story, detail) {
                story.details.push(detail);
                utilService.saveToLocal(key, roadmaps);
            },
            deleteDetail: function (story, detailIndex) {
                story.details.splice(detailIndex, 1);
                utilService.saveToLocal(key, roadmaps);
            }
        };
    }]];
});
