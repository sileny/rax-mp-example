# rax-materials-basic-app

- [小程序文档](https://rax.js.org/docs/guide/about-miniapp)

## Getting Started

- `npm run start`：Open [http://localhost:3333](http://localhost:3333) to view it in the browser.
- `npm run build`：Builds the app for production to the `build` folder.

## 项目目录结构说明

```
├── build.config.js
├── package.json
└── src
    ├── app.js
    ├── app.json
    ├── components
    │   └── Logo
    │       ├── index.css
    │       └── index.jsx
    ├── miniapp-native
    │   └── native-home
    │       ├── index.axml
    │       ├── index.css
    │       ├── index.js
    │       └── index.json
    └── pages
        ├── about
        │   ├── index.acss
        │   ├── index.axml
        │   ├── index.js
        │   └── index.json
        ├── home
        │   ├── index.css
        │   └── index.jsx
        ├── rax-web-view
        │   └── index.jsx
        └── web-view
            ├── index.acss
            ├── index.js
            └── index.json
```

[目录介绍](https://rax.js.org/docs/guide/import-native-page#%E6%B3%A8%E6%84%8F)

- `miniapp-native`：原生
- `pages` 目录
  - `web-view`：加载外部的h5页面
  - `about`：原生
  - `home`：rax

页面跳转：

- `dd.navigateTo('/miniapp-native/native-home/index')`
- `dd.navigateTo('/pages/home/index')`

# framework

- [rax-app](https://github.com/raxjs/rax-app)：提供项目研发的基础规范和最佳实践，包含目录规范、工程能力、MPA、SPA、SSR、状态管理、路由、埋点监控等能力

# hybrid

- [跨端小程序](https://github.com/raxjs/miniapp)

# api

- [rax 核心 api](https://rax.js.org/docs/api/DOM)
- [uni api](https://rax.js.org/docs/api/about)
- [跨多端的 API](https://github.com/raxjs/universal-api)

# component

- [基础元件](https://rax.js.org/docs/components/about)
- [基础组件](https://rax.js.org/docs/components/meet-about)
- [跨多端的基础元件](https://github.com/raxjs/rax-components)
