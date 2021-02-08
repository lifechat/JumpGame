/**
 * @desc 处理首页功能
 * @author xiaqi17
 * @time 2021-2-1
 */
let selectedYear;
let selectedMonth;

function monthClick(month, target) {
    selectedYear = $("#selectYear").val();
    console.log(selectedMonth);
    console.log(month);
    selectedMonth = month;
    calendar.updateDateList(selectedYear, month);
    $("#months_wrap .month_item").removeClass('current');
    $(target).addClass('current');
}

function yearOnChange() {

    selectedYear = $("#selectYear").val();
    console.log('yearOnChange' + selectedYear);
    calendar.updateDateList(selectedYear, selectedMonth);
    updateTaxMonthList(selectedYear, selectedMonth);
}

function pageInit() {
    var today = new Date();
    selectedMonth = today.getMonth() + 1;
    selectedYear = today.getFullYear();
    calendar.updateDateList(selectedYear, selectedMonth);
    updateTaxMonthList(selectedYear, selectedMonth);

    $("#months_wrap .month_item").eq(selectedMonth - 1).addClass('current');
}
pageInit();
// 更新每个列表
function updateTaxMonthList(currentYear, currentMonth) {
    var monthFull = currentYear * 100 + currentMonth;
    console.log(monthFull);
    var monthData = !!taxFullData[monthFull] ? taxFullData[monthFull].list : [];
    console.dir(monthData);
    var html = "";
    monthData.map((item, index) => {
        if (item.type == "sebao") {
            html += '<div class="item item_sebao">';
        } else {
            html += '<div class="item">';
        }

        html += '<div class="item_head"><span class="date">' + item.timeStr + '</span></div>';
        if (!!item.preText && item.preText.length > 0) {
            html += '<div class="item_body">' + item.preText + '<br/>' + item.taxSubjects + '</div>';
        } else {
            html += '<div class="item_body">' + item.taxSubjects + '</div>';
        }
        if (!!item.extra && item.extra.length > 0) {
            html += '<div class="item_extra">' + item.extra + '</div>';
        }
        html += '</div>';
    });
    $("#tax_month_list").html(html);
}
// 分类跳转
function jumpToSort() {
    window.location.href = "sort.html?year=" + $("#selectYear").val();
}