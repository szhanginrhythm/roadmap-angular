'use strict';

define([], function(){
    return ['utilService', function(){

        function saveToLocal(key, value) {
            if (window.localStorage) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                Cookie.write(key, JSON.stringify(value));
            }
        }

        function getFromLocal(key) {
            var value = window.localStorage? localStorage.getItem(key): Cookie.read(key);
            if (value && value !== 'undefined') {
                return JSON.parse(value);
            } else {
                return [];
            }
        }

        function getMonth() {
//            return [{id:'Jan', name:'Jan'},
//                    {id:'Feb', name:'Feb'},
//                    {id:'March', name:'March'},
//                    {id:'April', name:'April'},
//                    {id:'May', name:'May'},
//                    {id:'June', name:'June'},
//                    {id:'July', name:'July'},
//                    {id:'Aug', name:'Aug'},
//                    {id:'Sept', name:'Sept'},
//                    {id:'Oct', name:'Oct'},
//                    {id:'Nov', name:'Nov'},
//                    {id:'Dec', name:'Dec'}
//                    ];
            return ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        }

        return {
            saveToLocal: saveToLocal,
            getFromLocal: getFromLocal,
            getMonth: getMonth
        };
    }];
});