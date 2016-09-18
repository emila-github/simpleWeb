# simpleWeb
前端简单站点开发运行环境


# 使用步骤

    - npm install   //安装依赖
    - npm run dev   //运行开发环境  打开 http://localhost:8080
    - npm run build //编译代码  打开 http://localhost:8080/dist/ 看编译后效果
	- npm run test  //查看测试结果


## mocha-webpack使用 ##

- [npmjs] [mocha-webpack](https://www.npmjs.com/package/mocha-webpack)

## issues ##
- 关于 mocha-webpack中没有 `--compilers`,  是因为webpack的`babel-loader`已经解决了es6 loader问题。（[issues](https://github.com/zinserjan/mocha-webpack/issues/23)）