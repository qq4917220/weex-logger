/**
 * Logger 日志助手，模拟实现控制台日志输出
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.outputContent = '';
        this.output = undefined;
    }
    Object.defineProperty(Logger, "Instance", {
        /**
         * Instance 获取Logger单例
         */
        get: function () {
            return this.instance || (this.instance = new Logger());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * add 输出日志信息
     * @param str 日志信息
     */
    Logger.prototype.add = function (str) {
        console.log('info');
        console.log(str);
        if (this.output) {
            if (this.outputContent != '') {
                str = "\r\n" + str;
            }
            this.outputContent += str;
            this.output(this.outputContent);
        }
    };
    Object.defineProperty(Logger.prototype, "content", {
        /**
         * 日志内容
         */
        get: function () {
            return this.outputContent;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * start 设置输出函数
     * @param output 输出函数
     */
    Logger.prototype.start = function (output) {
        this.output = output;
    };
    /**
     * stop 停止输出
     */
    Logger.prototype.stop = function () {
        this.output = undefined;
    };
    return Logger;
}());
export { Logger };
var i = Logger.Instance;
export default i;
