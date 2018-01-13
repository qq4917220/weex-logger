export interface OutputFunc {
    (content: string): void;
}
/**
 * Logger 日志助手，模拟实现控制台日志输出
 */
export declare class Logger {
    private static instance;
    /**
     * Instance 获取Logger单例
     */
    static readonly Instance: Logger;
    private content;
    private output;
    /**
     * add 输出日志信息
     * @param str 日志信息
     */
    add(str: string): void;
    /**
     * 日志内容
     */
    readonly Content: string;
    /**
     * start 设置输出函数
     * @param output 输出函数
     */
    start(output: OutputFunc): void;
}
declare const i: Logger;
export default i;
