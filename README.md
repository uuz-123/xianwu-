# 鲜物 - 生鲜电商小程序

<p align="center">
  <img src="https://img.shields.io/badge/微信小程序-2.19.4-brightgreen" alt="微信小程序版本">
  <img src="https://img.shields.io/badge/ES6-支持-blue" alt="ES6">
  <img src="https://img.shields.io/badge/代码包-≤2.7MB-orange" alt="代码包大小">
</p>

## 项目简介

**鲜物** 是一款专注于生鲜美食的微信小程序电商平台，提供新鲜水果、蔬菜、肉类、海鲜等优质商品的在线选购服务。

## 功能特性

### 核心模块

| 模块 | 功能说明 |
|------|----------|
| 首页 | 秒杀专区、新品上市、热销榜单、商品瀑布流展示 |
| 分类 | 多品类商品分类浏览与筛选 |
| 购物车 | 商品管理、数量调整、批量结算 |
| 我的 | 个人信息、订单管理、地址管理、设置中心 |

### 详细功能

- **商品浏览** - 56+ 款生鲜商品，涵盖水果、蔬菜、肉类、海鲜、烘焙等品类
- **商品搜索** - 支持关键词搜索商品
- **商品详情** - 规格选择、加入购物车、立即购买
- **购物车管理** - 增删改查、全选结算
- **地址管理** - 新增、编辑、删除、设置默认地址
- **订单系统** - 创建订单、订单列表、状态跟踪
- **用户中心** - 个人信息编辑、头像昵称修改
- **登录注册** - 手机号密码登录、微信一键登录
- **下拉刷新** - 各页面支持下拉刷新，首页刷新随机展示新商品

## 页面结构

```
pages/
├── index/          # 首页
├── category/       # 分类页
├── cart/           # 购物车
├── mine/           # 我的
├── search/         # 搜索页
├── detail/         # 商品详情
├── order/          # 订单页
├── address/        # 地址列表
├── addressEdit/    # 地址编辑
├── setting/        # 设置页
├── profile/        # 个人信息编辑
└── login/          # 登录注册页
```

## 技术栈

- **框架**：[微信小程序原生开发](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- **样式**：WXSS / CSS3
- **数据存储**：微信小程序本地存储 (Storage)
- **图片服务**：picsum.photos / Unsplash
- **基础库版本**：2.19.4

## 快速开始

### 环境要求

- [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- 微信小程序账号（可选，开发测试可用游客模式）

### 安装步骤

1. 克隆本仓库到本地

```bash
git clone https://github.com/uuz-123/xianwu-.git
```

2. 使用微信开发者工具打开项目目录

3. 在开发者工具中点击「编译」即可预览

### 项目配置

```json
// project.config.json
{
  "appid": "touristappid",
  "projectname": "xianwu",
  "compileType": "miniprogram",
  "libVersion": "2.19.4"
}
```

## 项目亮点

- **轻量高效** - 代码包控制在 2.7MB 以内，保证加载速度
- **流畅体验** - 商品列表滚动帧率稳定 55fps+
- **数据持久化** - 购物车、地址、订单数据本地存储
- **模块化设计** - 页面组件化，代码结构清晰
- **用户体验** - 下拉刷新、加载动画、状态提示等细节优化

## 项目截图

> 使用微信开发者工具预览或真机调试查看效果

## 开发规范

- 页面文件采用 `.js` / `.json` / `.wxml` / `.wxss` 四件套
- 公共工具函数存放于 `utils/` 目录
- 全局数据与方法在 `app.js` 中管理
- 本地存储键名统一，避免冲突

## 待优化项

- [ ] 接入真实后端 API
- [ ] 添加商品评价系统
- [ ] 实现支付功能
- [ ] 增加优惠券/促销活动
- [ ] 分包加载进一步优化

## 许可证

[MIT](LICENSE)

## 作者

> 欢迎提交 Issue 和 Pull Request！

---

<p align="center">Made with ❤️ for fresh food lovers</p> 
