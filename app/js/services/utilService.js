/*global define, Cookie */

define([], function () {
    return ['utilService', function () {
        var year = new Date().getFullYear(),
            months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
        function saveToLocal(key, value) {
            if (window.localStorage) {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                Cookie.write(key, JSON.stringify(value));
            }
        }

        function getFromLocal(key) {
            var value = window.localStorage ? localStorage.getItem(key) : Cookie.read(key),
                return_val;

            if (value && value !== 'undefined') {
                return_val = JSON.parse(value);
            } else {
                return_val = [];
            }
            return return_val;
        }

        function getMonths() {
            return months;
        }

        function getQuarters() {
            return quarters;
        }

        function getMonthIndex(option) {
            var index = months.indexOf(option);
            if (index === -1) {
                index = (quarters.indexOf(option) * 3);
            }
            return { "month": index, "year" : year };
        }

        function getFormattedDate(type, date) {
            var return_val;
            if (type === "Monthly") {
                return_val = date.year + " " + getMonths()[date.month];
            } else {
                return_val = date.year + " " + (getQuarters()[date.month / 3]);
            }
            return return_val;
        }

        return {
            saveToLocal: saveToLocal,
            getFromLocal: getFromLocal,
            getMonths: getMonths,
            getMonthIndex: getMonthIndex,
            getQuarters: getQuarters,
            getFormattedDate: getFormattedDate
        };
    }];
});
