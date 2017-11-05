/**
 * 格式化传入时间
 * @{param} f(可选)，转换格式 默认为yyyy/MM/dd HH:mm:ss
 * return String类型 转换后的日期字符串
 */
Date.prototype.Format = function(f){
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    var fmt = f ? f : 'yyyy/MM/dd HH:mm:ss';
    if (/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o)
    	if (new RegExp("(" + k + ")").test(fmt)) 
    		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/**
 * 加(减)时间，改为世界时
 * {param} Number 毫秒数(可选)，为空默认转为世界时
 */
Date.prototype.offset = function(s){
    s = s ? s : this.getTimezoneOffset() * 60 * 1000;
    return new Date(this.getTime() + s);
}