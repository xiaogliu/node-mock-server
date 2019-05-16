记录开发过程

基于 koa，但是 [koa-router](https://github.com/ZijianHe/koa-router) 现在问题很多，最初的开发者都卖掉了，看后续发展。

## 目录

## 依赖

### dependencies

1. [koa](https://koajs.com)：node 框架
2. [koa-router](https://github.com/ZijianHe/koa-router)：koa-router
2. [mockjs](http://mockjs.com/)：mock 数据

```bash
npm i koa mockjs koa-router
```

### devDependencies

1. [nodemon](https://github.com/remy/nodemon): 自动重启服务

不侵入代码，直接在 `package.json` 中配置下就好

```js
// pakcage.json
"scripts": {
  "dev": "nodemon server.js"
}
```

```bash
npm i nodemon -D
```

## koa2 相关

1. [廖雪峰的教程](https://www.liaoxuefeng.com/wiki/1022910821149312/1099752344192192) 很好，主要理解中间件的概念：一个个 `async` 函数，通过 `next` 可以调用下一个中间件或者停止（权限控制）。    
2. 目录结构组织的不好：

