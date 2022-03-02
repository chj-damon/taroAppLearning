export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/form/index',
    'pages/jotai/index',
    'pages/tabBar/home/index',
    'pages/tabBar/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/tabBar/home/index',
        text: '首页',
        iconPath: 'static/images/tab-bar/home-outline.png',
        selectedIconPath: 'static/images/tab-bar/home-fill.png',
      },
      {
        pagePath: 'pages/tabBar/mine/index',
        text: '我的',
        iconPath: 'static/images/tab-bar/user-outline.png',
        selectedIconPath: 'static/images/tab-bar/user-fill.png',
      },
    ],
  },
});
