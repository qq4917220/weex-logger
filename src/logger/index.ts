export interface OutputFunc {
    (content: string): void
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

    private content = ''
    private output: OutputFunc | undefined = undefined

    /** 
     * info 输出日志信息
     * @param str 日志信息
     */
    info(str: string) {
        console.log('info');
        console.log(str)
        if (this.output) {
            if (this.content != '') {
                str = `\r\n${str}`
            }
            this.content += str
            this.output(this.content)
        }
    }

    /**
     * 日志内容
     */
    get Content() {
        return this.content
    }

    /**
     * setOutput 设置输出函数
     * @param output 输出函数
     */
    setOutput(output: OutputFunc) {
        console.log(output);
        this.output = output
    }
}

const i = Logger.Instance
export default i