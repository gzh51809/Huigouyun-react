
# `乐厨易购APP` #
<h3>react移动端项目

##作者：刘伟英 ##
## 项目架构 ##



-  开发IDE：Visual Studio
 

- 前端开发：React + Redux + Ant Design + webpack + jsx，兼容Chrome，使用rem、flex、百分比布局

- 后端开发：NodeJS(11.1.0) 

<h2>项目演示地址：http://39.108.252.230：3001/#/list

## 项目目录结构


   
	|-- package-lock.json 

    |-- package.json

    |-- README.md

    |-- build   npm build后的文件供上线使用

    |-- config -配置文件

    |-- public 项目模板文件
   
    |-- scripts 关于build/test/start

    |-- src 开发目录

        |-- App.js 主组件

        |-- index.js 入口文件
      
        |-- serviceWorker.js

        |-- img  引入图片资源
        
        |-- page 各个页面组件

        |   |-- cart 购物车

        |   |   |-- cart.js

        |   |-- datail 详情页

        |   |   |-- datail.js

        |   |-- find 搜索

        |   |   |-- find.js

        |   |-- home 首页

        |   |   |-- home.js

        |   |-- list 分类页

        |   |   |-- list.js 分类页父组件

        |   |   |-- listRight.js  分类页右侧组件

        |   |-- listdatail 列表页

        |   |   |-- listdatail.js

        |   |-- mine 我的

        |       |-- mine.js

        |-- router

        |   |-- index.js

        |-- sass 各页面的样式

            
