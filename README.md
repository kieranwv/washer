# 🪣 Wash Car Weapp

扫码自助洗车 - 微信小程序，基于微信小程序 + TypeScript 搭建，提供地图定位、订单、消息、洗车、个人中心等页面模板

<table>
  <tr>
    <td colspan="3"> <img width="100%" src="./.readme/banner.svg"></td>
  </tr>
  <tr>
    <td style="width:33%"><img width="100%" src="./.readme/home.jpg"></td>
    <td style="width:33%"><img width="100%" src="./.readme/submit.jpg"></td>
    <td style="width:33%"><img width="70%" src="./.readme/mine.jpg"></td>
  </tr>
  <tr>
    <td style="width:33%"><img width="100%" src="./.readme/order.jpg"></td>
    <td style="width:33%"><img width="100%" src="./.readme/message.jpg"></td>
    <td style="width:33%"><img width="70%" src="./.readme/discount.jpg"></td>
  </tr>
  <tr>
    <td style="width:33%"><img width="100%" src="./.readme/service.jpg"></td>
    <td style="width:33%"><img width="100%" src="./.readme/pay.jpg"></td>
    <td style="width:33%"><img width="70%" src="./.readme/wash.jpg"></td>
  </tr>
  <tr>
    <td style="width:33%"><img width="100%" src="./.readme/no-order.jpg"></td>
    <td style="width:33%"><img width="100%" src="./.readme/no-message.jpg"></td>
    <td style="width:33%"><img width="70%" src="./.readme/no-discount.jpg"></td>
  </tr>
  <tr>
    <td style="width:33%"><img width="100%" src="./.readme/discount-exchange.jpg"></td>
  </tr>
</table>

## 特性

**⭐ 微信小程序** - 基于微信小程序原生开发技术；

**🧱 页面模板** - 提供面向扫码洗车场景的静态页面，包含地图、订单、洗车、钱包等界面；

**💎 产品设计** - 基于成熟的产品设计、拥有统一的 UI 设计及界面风格，可以直接接入逻辑作为实际项目使用；

## 功能页面

- [x] 登录/注册页面、微信登录页面；

- [x] 首页地图、扫码洗车、周围洗车点分布

- [x] 洗车功能页面；

- [x] 个人中心（订单、资料、消息、设置等）；

- [x] 下单、支付、订单、优惠卷等；

## 使用

### 1. 初始化

使用微信开发者工具打开，设置您项目的 appId，具体使用方式，可以参考开发文档： [https://developers.weixin.qq.com/miniprogram/dev/framework/](https://developers.weixin.qq.com/miniprogram/dev/framework/)；

配置腾讯地图 Key，存放目录为`/config/map.ts`，您可以访问 [https://lbs.qq.com/](https://lbs.qq.com/) 进行配置；

项目依赖 `wx.getLocation` 接口，请自行申请开通；

### 2. 目录说明

```
|-- app.json # 页面配置
|-- app.scss # 全局样式
|-- app.ts # 入口文件
|-- sitemap.json # 站点爬虫配置
|-- apis # 接口文件管理
|-- assets # 静态资源
|-- components # 全局组件
|-- config # 配置目录
|-- libs # 插件目录
|-- pages # 页面文件
|-- utils # 工具函数
|-- typings # ts 类型声明
|-- eslintrc.js # eslint 规则
|-- .prettierignore Prettier 格式化忽略文件
|-- .prettierrc.js Prettier 格式化配置
|-- package.json # npm 配置
|-- project.config.json # 项目开发配置
|-- project.private.config.json # 项目开发配置，私有
|-- tsconfig.json # ts 配置
```

## 开源协议

[MIT licensed](./LICENSE) © 2022-PRESENT [Kaivan Wong](https://github.com/kaivanwong)
