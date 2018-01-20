export interface OutputFunc {
    (outputContent: string): void
}

/**
 * Logger 日志助手，模拟实现控制台日志输出
 */
export class Logger {
    private static instance: Logger

    /**
     * Instance 获取Logger单例
     */
    static get Instance() {
        return this.instance || (this.instance = new Logger())
    }

    private outputContent = ''
    private output: OutputFunc | undefined = undefined

    /** 
     * add 输出日志信息
     * @param str 日志信息
     * @param isJson 可选参数，默认为不输出json，设为true时则输出为json
     */
    add(str: any, isJson?: boolean) {
        if (isJson) {
            str = JSON.stringify(str);
        } else {
            str = str + ''
        }
        if (this.output) {
            if (this.outputContent != '') {
                str = `<br/>\r\n${str}`
            }
            this.outputContent += str
            this.output(this.outputContent)
        }
    }

    /**
     * 日志内容
     */
    get content() {
        return this.outputContent
    }

    /**
     * start 设置输出函数
     * @param output 输出函数
     */
    start(output: OutputFunc) {
        this.output = output
    }

    /**
     * stop 停止输出
     */
    stop() {
        this.output = undefined;
    }
}

const i = Logger.Instance
export default i