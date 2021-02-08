/***
 * 公共函数
 * 封装
 *  */
//  一键向上
function goTop() {
    window.scrollTo(0, 0);
}

/**
 *  extend function,improved
 * */
function extend(subClass, superClass) {
    var F = function() {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
}
var JWBubble = (function() {

})();