<div align="center">
  <a href="https://github.com/kaivanwong/we-wash-car" target="_blank">
    <img width="180" src="./miniprogram/assets/logo.png"/>
  </a>
</div>

<div align="center">
  <h1>weWashCar 自助洗车</h1>
  <div>
  
  微信小程序自助洗车应用，整体基于 TypeScript + Vant UI 开发，提供一整套自助洗车静态页面，内嵌地图定位、订单、消息、洗车操作等内容。

[![license](https://img.shields.io/github/license/kaivanwong/we-wash-car)](./LICENSE)
[![github](https://img.shields.io/github/package-json/v/kaivanwong/we-wash-car)](https://github.com/kaivanwong/we-wash-car)

  </div>
</div>

### ✨ 特性

- 基于微信小程序开发技术开发，提供常用的开发文档，开发配置等工程化开发内容；

- 集成 Vant UI 组件库，TypeScript 开发环境，高德地图插件，提供模块化的开发；

- 提供一套基于完整 UI 设计的静态页面，包含地图定位、订单、消息、洗车操作等内容；

### 📌 功能页面

- [ ] 登录/注册页面、微信登录页面；

- [ ] 首页地图、扫码洗车、周围洗车点分布

- [ ] 洗车功能页面；

- [ ] 个人中心（订单、资料、消息、设置等）；

- [ ] 下单、支付、订单、优惠卷等；

### 🌰 界面展示


### 使用

#### 1. 初始化

安装依赖包

```
npm install
```

点击微信开发者 IDE，选择 ` 工具 / 构建 Npm`

#### 2. 目录说明

```
|-- miniprogram # 小程序源码目录，即 src
    |-- miniprogram_npm # 构建 npm 目录
    |-- app.json # 页面配置
    |-- app.scss # 全局样式
    |-- app.ts # 入口文件
    |-- sitemap.json # 站点爬虫配置
    |-- apis # 接口
    |-- assets # 静态资源
    |-- components # 全局组件
    |-- config # 配置
    |-- pages # 页面
    |-- utils # 工具函数
|-- typings # ts 类型声明
|-- eslintrc.js # eslint 规则
|-- package.json # npm 配置
|-- project.config.json # 项目开发配置
|-- project.private.config.json # 项目开发配置，私有
|-- tsconfig.json # ts 配置
```

#### 3. 关于 Vant UI

[组件库地址](https://youzan.github.io/vant-weapp/#/home)

#### 4. 关于高德地图

[插件地址](https://lbs.amap.com/api/wx/summary/)

### 开源协议

[MIT licensed](./LICENSE) © 2022-PRESENT Kaivan Wong