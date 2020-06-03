// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '李中月',
    width: 0,
    height: 0,
    tel: '13765308262',
    sex: '男',
    age: '23',
    email: 'lzy@echocow.cn',
    github: 'https://github.com/lizhongyue248',
    blog: 'https://echocow.cn',
    resume: 'https://me.ayue.wiki',
    skill: [{
        name: 'Java',
        percent: 75
      },
      {
        name: 'Kotlin',
        percent: 50
      },
      {
        name: 'HTML/CSS',
        percent: 90
      },
      {
        name: 'JavaScript',
        percent: 55
      },
      {
        name: 'Vue',
        percent: 50
      }
    ],
    skillInfo: [{
      title: '后端技术',
      content: '熟练使用 Java、Kotlin 进行开发；热衷于后端技术，熟练使用 Servlet、ssh、ssm 以前的框架以及目前的 Spring boot、Spring cloud 流行框架；熟练使用 Maven、Gradle 构建工具以及测试驱动开发（TDD）；深入学习 OAuth2 开放授权协议，熟练使用 Spring Security OAuth 模块;深入了解 微服务，了解使用 Reactor Reactive Program 与 Vert.x;熟练使用 mysql、postgresql 数据库，了解使用 redis、mongodb 数据库。'
    }, {
      title: '前端技术',
      content: '熟悉 HTML5/CSS3, 了解前端生态圈，熟练使用 Vue2 技术栈开发，了解 React 技术栈开发，熟练使用 Vuepress、Docusaurus、Docsify 等多种静态文档生成工具。'
    }, {
      title: '运维技术',
      content: '具有一定的自主解决问题的能力，熟悉使用 docker、docker-compose  容器编排工具，熟悉使用 redhat 系与 arch 系 Linux 系统，主开发系统为 Manjaro。'
    }],
    education: [{
      school: '贵州民族大学',
      major: '软件工程 ',
      year: '2016-2020',
      desc: '本专业是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、测试等方面。'
    }],
    project: [{
      name: '基于 OAuth2 授权中心的响应微服务毕业设计指导系统的设计与实现',
      job: '毕业设计',
      year: '2020/01-2020/06',
      desc: '本项目是和一个同学一起为学校做的系统，同时也是自己的毕业设计。此系统为两个项目，Vue前端与Spring Cloud 响应式微服务后端，主要是为了解决我校毕业设计流程不规范，指导流程复杂的问题。其使用Kotlin、Java 混合开发，主要核心技术有 Vue 全家桶，Vuetify，Webflux，QueryDSL，Spring Cloud Ribbon 服务调用，Consul 服务发现与注册，Sentinel 服务熔断，Spring Cloud Security OAuth，Prometheus 与 Grafana 服务监控，Skywalking 链路追踪，ELK 集中式日志管理，Github Action 持续集成，Docker-compose 容器编排等。',
      github: 'https://github.com/GeneralAndKing/end-of-university'
    }, {
      name: '贵州民族大学 OAuth2 授权中心',
      job: '贵民大移动互联工作室',
      year: '2019/06-2020/05',
      desc: '本项目是为学校开发的授权中心，由我个人独立开发与维护，利用 Spring Seucirty OAuth 进行实现，对其源码有所学习与了解。分为三个项目：OAuth2 授权服务器，Vue 授权中心前端，Vert.x 授权中心后端。使用 Kotlin 开发，遵循 TDD 原则，使用 PostgreSQL 数据库，RBAC 动态授权。',
      github: 'https://github.com/gzmuSoft/authorization-center'
    }, {
      name: '智能制造协同平台',
      job: 'GAK',
      year: '2019/12',
      desc: '本项目是我们团队的参赛项目，依靠他取得了省赛第二的3W元奖金，需求来自于比赛举办方。前后端分离，Vue + Spring Boot 以及 OAuth2 的最小实践，自己主要负责前端与授权部分，使用 JWT 以及 RSA 非对称密钥加密。',
      github: 'https://github.com/GeneralAndKing/one-yard'
    }, {
      name: '贵州省社会稳定风险评估项目',
      job: '贵民大移动互联网工作室',
      year: '2018/07-2018/10',
      desc: '本项目是我们学校接收的一个项目，我作为学生开发团队的主要负责人。使用 Jboot 作为微服务开发框架，半前后端分离模式，Consul 作为服务注册与发现，Hystrix 服务熔断，Motan RPC 服务调用。',
      github: 'https://github.com/gzmuSoft/SaPlat'
    }, {
      name: '易班商城/易班座位预约/易运动',
      job: '易班工作站',
      year: '2017/05-2018/10',
      desc: '这三个项目为个人初期自学时的练手项目，自己通过自学，分别使用 Servlet、ssh、ssm、Vert.x 进行开发，接入易班 OAuth 接口进行用户身份认证，见证了自己的成长历史。',
      github: 'https://github.com/GZMZ-YIBAN/YBSport-vertx'
    }],
    certification: [{
        name: '软件设计师',
        date: '2019-05-25'
      },
      {
        name: '红帽认证工程师(RHCE)',
        date: '2018-03-05'
      },
      {
        name: '红帽认证系统管理员(RHCSA)',
        date: '2017-12-05'
      }
    ]
  },
  copy(event) {
    wx.setClipboardData({
      data: event.target.dataset.text,
      success: res => {
        wx.showToast({
          title: '已复制到剪贴板'
        })
      }
    })
  },
  saveImage(event) {
    const path = event.target.dataset.path
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.writePhotosAlbum']) {
          this.saveImageToPhone(path)
        } else {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: () => {
              this.saveImageToPhone(path)
            },
            fail: (res) => {
              wx.showModal({
                title: '保存失败',
                content: '请开启访问手机相册权限'
              })
            }
          })
        }
      }
    })
  },
  saveImageToPhone (path) {
    wx.getImageInfo({
      src: path,
      success: ret => {
        wx.saveImageToPhotosAlbum({
          filePath: ret.path,
          success(res) {
            wx.showToast({
              title: '已保存到相册',
            })
          },
          fail: (res) => {
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            })
          }
        })
      }
    })
  },
  onShow: function() {
    const width = wx.getSystemInfoSync().windowWidth
    const height = wx.getSystemInfoSync().windowHeight
    this.setData({
      width,
      height
    })
  },
})