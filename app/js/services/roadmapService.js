/*global define, angular */
 
define(['services/utilService'], function (utilService) {
    return ['roadmapService', ['utilService', function (utilService) {

//        roadmap {
//            name: '',
//            type: 'Monthly' or 'Quarterly',
//            startDate: { 'month': m, 'year': y }
//            themes: [
//                      {
//                          name: 'test',
//                          stories: [
//                                      {
  //                                     date: {month: m, year: y},
//                                       details:  [
//                                           { text: "textddd" },
//                                           { text: "story2"}
//                                       ]
//                                      },
//                                      {
  //                                     date: {month: m, year: y},
//                                       details:  [
//                                           { text: "textddd" },
//                                           { text: "story2"}
//                                       ]
//                                      }
//                                   ]
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
                var return_val;
                angular.forEach(roadmaps, function (roadmap, key) {
                    if (roadmap.id === parseInt(id, 10)) {
                        return_val = roadmap;
                        return;
                    }
                });
                return return_val;
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
            getStoryByThemeAndPeriod: function (theme, period) {
                var return_val = null;
                angular.forEach(theme.stories, function (story, key) {
                    if (story.date.month === period.date.month
                            && story.date.year === period.date.year) {
                        return_val = story;
                        return;
                    }
                });
                if (return_val === null) {
                    return_val = { date: period.date, details: []};
                    this.addStory(theme, return_val);
                }
                console.log(return_val);
                return return_val;
            },
            addDetail: function (story, detail) {
                story.details.push(detail);
                utilService.saveToLocal(key, roadmaps);
            },
            deleteDetail: function (story, detailIndex) {
                story.details.splice(detailIndex, 1);
                utilService.saveToLocal(key, roadmaps);
            },
            generateTimeperiods: function (type, startDate) {
                var periodLength,
                    numPeriods,
                    month = startDate.month,
                    year = startDate.year,
                    date_obj,
                    time_period_obj,
                    timePeriods = [],
                    i;
                if (type === "Quarterly") {
                    periodLength = 3;
                    numPeriods = 4;
                } else if (type === "Monthly") {
                    periodLength = 1;
                    numPeriods = 12;
                }
                for (i = 0; i < numPeriods; i += 1) {
                    date_obj = {"month" : month, "year" : year};
                    time_period_obj = {
                        formatted: utilService.getFormattedDate(type, date_obj),
                        date: date_obj
                    };
                    timePeriods.push(time_period_obj);
                    month += periodLength;
                    if (month > 11) {
                        month %= 12;
                        year += 1;
                    }
                }
                return timePeriods;
            }
        };
    }]];
});
