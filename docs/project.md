---
id: project
title: 项目实战
sidebar_label: 项目实战
keywords:
    - 项目实战
---

自己开发的项目能够拿得出手的基本都在 [Github](https://github.com/lizhongyue248) 进行了开源，其中具有代表性的如下几个。

## 易班系列

<br />

（2017年5月 - 2019年3月）主要有以下几个：

- 易班商城（servlet、ssh版本）
- 易班座位预约（ssm）
- 易运动（vert.x）

易班是见证我成长的地方，从 servlet -> ssh ->  ssm -> vert.x 项目，一步一步学习来进行实践的。当然，前面几个应用由于那个时候不会用 Git，自然也不会用 Github，在时间的流逝下源码渐渐丢失了，只留下了一个[ servlet 版本的易班商城](https://github.com/GZMZ-YIBAN/YBStore) 和 [vert.x 的易运动](https://github.com/GZMZ-YIBAN/YBSport-vertx)

 - [座位预约演示1](/img/ybseat.png)
 
 - [座位预约演示2](/img/ybseat2.png)
 
 - [易运动演示](/img/ybsport.gif)

## 社会稳定风险评估项目

> 项目地址：https://github.com/gzmuSoft/SaPlat

（2018 年 7 月）

- 使用 Jboot 作为核心框架
- 采用模板引擎 Enjoy 安全框架 shiro/jwt 缓存框架 redis
- 使用 motan RPC 微服务体系

作为核心开发人员与学生负责人，主要负责业务逻辑梳理、前端 UI 编写，框架环境搭建以及文档书写，贯穿整个项目。

## Help-teacher

> 项目地址：https://github.com/GeneralAndKing/help-teacher

（2018 年 11 月）

- 使用 electron 作为桌面端跨平台解决方案
- 接口遵循 restful 风格规范，nedb 嵌入式数据库
- 使用 vue js 框架，vert.x 与 mongodb 数据备份，Jwt 认证

作品赛项目，和一个队友进行合作开发的教师工具集。为了提高项目亮点，采用 Electron 跨平台桌面解决方案，express 本地服务器。主要负责前端界面书写，以及 vert.x 数据备份服务书写。

## 贵州民族大学授权中心

> 授权服务器项目地址：https://github.com/gzmuSoft/authorization-server
>
> 授权中心后端项目地址：https://github.com/gzmuSoft/authorization-center-ui
>
> 授权中心前端项目地址：https://github.com/gzmuSoft/authorization-center

（2019 年 6 月 至今）由我一个人开发维护。

- Spring Security OAuth 为核心实现授权服务器实现
- 基于 Scope 的第三方客户端认证授权
- 基于角色的 RBAC 授权模型
- OAuth2 开放授权协议扩展实现
- Vert.x + Vue 前后端分离的资源服务器授权中心实现
- 读写分离的授权服务器实现
- 国际化支持与动态主题支持
- 授权中心使用 Kotlin 编写，第一个 Kotlin 事件驱动项目
- 使用协程优化异步代码,极大提高开发体验

深入学习 OAuth2 后的落地实现，以 Spring Security OAuth 为基础，扩展实现自己的 OAuth2 授权服务器。提供多种权限控制方式，扩展手机和邮箱的登录模式，读写分离，提供一个资源服务器授权中心以对数据进行管理。多种客户端接入方式，较为满意的作品。

## G&K 智能制造协同平台

> 项目地址：https://generalandking.github.io/one-yard-ui/
>
> 项目文档：https://gak.ayue.wiki/
>
> 备份文档：https://generalandking.github.io/one-yard-ui/

（2019年12月）贵州省”一码当先“比赛项目，靠他为我们团队赢得了 3 W 元的奖金，碾压第一名所用的技术，但是依旧输在了 UI 上。三个人开发的项目：

- OAuth2 的最小化实现，RBAC 动态授权
- 后端 TDD 驱动开发
- 自己编写代码生成器生成代码
- WebSocket 通信
- docker-compose 容器编排
- Vuepress 在线文档
- Gradle 自动化打包发布流程

我主要负责 OAuth2 授权、鉴权以及前端 UI 的编写，还有环境的搭建、技术选型文档的编写。

## 正在进行的项目

目前正在进行的就是我的毕业设计，采用全异步非阻塞的微服务架构开发方式！尝试融入一些好玩的元素。所用的技术栈都是较为崭新的技术和特性。
