<p>
	<img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/wingscloud/banner.svg" />
</p>

# 项目特点

- 基于成熟的产品设计、UI 设计，可以直接作为实际项目使用；

- 基于微信小程序原生开发技术，搭配使用 TypeScript、Scss 开发；

- 提供洗车流程、订单、钱包、优惠卷等 16 张全流程页面模板；

- 基于微信常用 Api 二次封装、网络请求、表单验证等工具函数；

# 快速上手

1. 您需要安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)，，以及关于 [微信小程序原生开发](https://developers.weixin.qq.com/doc) 的前置知识。

2. Wings Cloud Template Wash 项目版本更新时，通过 [Github Release](https://github.com/wingscloud/template-wash/releases) 下载相应版本的源码压缩包。

3. 通过下载安装好的微信开发者工具打开项目。

4. 运行完成后，您将在微信开发者工具的模拟器中看到如下页面。

# 源码目录结构

```
├── /api                      // 接口管理
├── /assets               		// 静态资源
├── /components               // 公共组件
├── /config                   // 配置            
├── /libs                     // 插件      
├── /pages                    // 页面      
├── /static                   // TS 类型支持
├── /typeings                 // 全局状态管理
├── /utils                    // 工具函数
├── ...
├── app.json                  // 页面配置
├── app.scss                  // 主题变量及全局样式
├── app.ts                    // 入口文件
├── package.json              // 配置
└── ts.config.js              // TS 配置
```

## 界面展示

<table>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/home.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/submit.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/mine.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/order.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/message.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/discount.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/service.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/pay.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/wash.jpg?raw=true" /></td>
	</tr>
	<tr>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/discount-exchange.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/no-order.jpg?raw=true" /></td>
		<td><img width="100%" src="https://github.com/wingscloud/docs/blob/main/public/template-wash/no-message.jpg?raw=true" /></td>
	</tr>
</table>

# 参与共建

欢迎提交 PR。

# 开源协议

Wings Cloud 相关开源软件遵循 [Apache 2.0 协议](https://www.apache.org/licenses/LICENSE-2.0.html)，允许商业使用，但务必保留 LICENSE 信息。
