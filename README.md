weex-logger
=================

weex-logger是一个日志记录中间件,实现类似console.log的效果,方便在weex中显示交互数据。

导入访中间件,并调用start事件,定义好输出的变量，即可在当前页面及所有子页面中使用add事件增加信息，每行信息分开，方便查看。

Weex-logger is a logging middleware that implements a console.log - like effect and facilitates display of interactive data in weex.

Import the access middleware, and invoke the start event, define the output variables, then you can use the add event to increase information in the current page and all sub pages. Each row information is separated and convenient to view.

## Install

`npm install weex-logger --save`

## Usage

```ts

import logger from "../src/logger";

```

## Options

- `start` 开始记录 start record
- `add` 增加记录 added record
- `content` 全部记录内容 all records

## Example

```ts

    logger.add("no start");

    logger.start(content => {
      this.log = content;
    });
    
    logger.add("start1");
    logger.add("start2");

    let content = logger.Content;
    logger.add(JSON.stringify(content));

```    

## Licences

[MIT]
