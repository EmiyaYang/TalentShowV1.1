# 说明

本项目是个人博客的后台管理前端, 同时也是我接触 React 后的首个个人项目. 我会在写业务代码之余利用 storybook 去记录一下 react 相关的学习笔记与心得.

## 模板抽离

将业务无关的工程源码单独抽离出来放到 template 分支作为模板, 下面为模板特性:

1. 基于 CRA 采用 react-app-rewired 追加覆写配置, 非 eject 利于后续迭代升级.

2. 接入 storybook 便于组件开发

3. 技术栈: CRA + ts + graphQL

## 踩坑小记

### 在 ts 模式下 tsconfig.json 自动生成但忽略了 paths 字段

[issue](https://github.com/facebook/create-react-app/issues/5118#issuecomment-464025389)

Fine...🤷‍, 只能另起一个`tsconfig.paths.json`通过继承转接了.
