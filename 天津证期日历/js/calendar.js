var calendar = (function() {
    var currentYear;
    var currentMonth;
    var timeNow;
    var todayNum;

    function init() {
        var dateNow = new Date();
        currentYear = dateNow.getFullYear();
        currentMonth = dateNow.getMonth() + 1; //月份比平常加1
        currentDate = dateNow.getDate();
        todayNum = currentYear * 10000 + currentMonth * 100 + currentDate;

        console.log('todayNum:' + todayNum);

        updateDateList(currentYear, currentMonth);
    }

    function updateDateList() {

    }
    init();
    return {
        updateDateList: updateDateList
    };
})();

function getMonthlyMaxDate(year, month) {
    //判断一个月有的最大日数
    //month = 1-12;
    let addPoint = Math.floor((month - 1) / 12);
    console.log(addPoint)
    year = year + addPoint;
    month = month - addPoint * 12;

    let maxDate = 31;
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        maxDate = 30;
    }
    if (month == 2) {
        if (year % 4 == 0) {
            maxDate = 29;
        } else {
            maxDate = 28;
        }
    }
    return maxDate;
}

function calcCorrectMonth(year, month) {
    //输入：2018 1 输出：2018 1
    //输入：2018 12 输出：2018 12
    //输入：2018 0 输出:2017 12
    //输入：2018 13 输出：2019 1
    //输入：2018 33 输出：2020 9
    var addPoint = Math.floor((monthh - 1) / 12);
    year = year + addPoint;
    month = month - addPoint * 12;
    return { year: year, month: month }
}

function calcGoDay(dateNum, addNum) {
    var dateNum = parseInt(dateNum);
    var year = Math.floor(dateNum / 10000);
    var month = Math.floor((dateNum % 10000) / 100);
    var day = dateNum % 100;
    var _date = new Date();

    _date.setFullYear(year);
    _date.setMonth(month - 1);
    _date.setDate(day + addNum);

    var newYear = _date.getFullYear();

    var newMonth = _date.getMonth() + 1;

    var newDate = _date.getDate();

    var dateFull = newYear * 10000 + newMonth * 100 + newDate;

    return { year: newYear, month: newMonth, date: newDate, dateFull: dateFull };
}