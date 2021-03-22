# got-plus

- got-plus是一个基于[Got](https://www.npmjs.com/package/got)的HttpRequest库
- 可以通过注解的方式简单使用网络请求
- 目前暂时只支持application/json的输入输出，未来版本会扩展Got的更多实现

## TODO

|  type   | task name  | description |
|  ----  | ----  | ----  |
｜ dev | ~~Simple Get Request~~ | Get请求 |
｜ dev | ~~Simple Post Request~~ | Post请求 |
｜ dev | ~~Simple Put Request~~ | Put请求 |
｜ dev | ~~Simple Delete Request~~ | Delete请求 |
｜ test | ~~Simple Get Request Test~~ |  Get测试 |
｜ test | Simple Post Request Test |  |
｜ test | Simple Put Request Test |  |
｜ test | Simple Delete Request Test |  |
｜ dev | ... |  |

## Guide

### 1. Use [got-plus in JS](./sample/js/README.md) 
### 2. Use [got-plus in TS](./sample/ts/README.md) 

```js
// Use E.g
/**
 * define a get request
 **/

@RequestMapping({
     url: 'http://third-service-host/id/{id}/name/{name}',
    method: RequestMethod.GET,
})
async myThirdGet(
    @Header() header, // HeaderSetting
    @PathVariable({ name: 'id' }) id, // PathParam
    @PathVariable({ name: 'name' }) name, // PathParam
    @QueryParam() query, // Queryparam
) {}

/**
 * define a put request
 *  
 **/
@RequestMapping({
    url: 'http://third-service-host/id/{id}',
    method: RequestMethod.PUT,
})
async myThirdPut(
    @Header() header, // HeaderSetting
    @PathVariable({ name: 'id' }) id, // PathParam
    @QueryParam() query, // Queryparam
    @Body() body, // Queryparam
) {}
```

## 注解
- @RequestMapping
  - 用于定义请求的路由信息
- @Header
  - 用于定义Http请求的头部信息
- @PathVariable
  - URL路径参数
- @QueryParam
  - 查询参数
- @Body
  - POST/PUT的Body参数