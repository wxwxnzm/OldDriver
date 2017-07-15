/**
 * Created by geekJX on 2017-7-15.
 * input输入框相关处理
 */

(function () {

    window.inputObj = {
        tempLen: 0,
        /*
         * 自动补全和消除函数
         * @param {value}       现值
         * @param {completeStr} 补充字符串
         * @param {length}      限制长度
         * @param {rules}       规则
         * */
        autoComplete: function (value, completeStr, length, rules) {
            var limitLen = length || Infinity;
            if (value.length > limitLen) {
                return value;
            }
            if (this.tempLen > value.length) {
                this.tempLen = value.length;
                if (value.indexOf(completeStr) === -1) {
                    value = '';
                } else {
                    value = value.substring(0, value.lastIndexOf(completeStr) + completeStr.length);
                }
            } else {
                value = value + completeStr;
            }
            this.tempLen = value.length;
            return value;
        }
    };

})();