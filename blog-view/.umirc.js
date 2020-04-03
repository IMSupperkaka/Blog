
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/user',
      component: '../layouts',
      routes: [
        { path: '/user/login', component: './user/login' }
      ]
    },
    {
      path: '/post',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/post/detail', component: './post/Detail' }
      ]
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: './index'
        }
      ]
    }
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true, loadingComponent: './components/PageLoading' },
      title: 'blog-view',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
