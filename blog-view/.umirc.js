
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
        {
            path: '/code-mirror',
            component: './tools/code-mirror/index'
        },
        {
            path: '/',
            component: '../layouts/BasicLayout',
            routes: [
                {
                    path: '/',
                    redirect: '/article/front-end'
                },
                {
                    path: '/article/',
                    routes: [
                        {
                            path: ':type',
                            component: './Article/index'
                        },
                        {
                            path: ':type/detail/:id',
                            component: './Article/Detail'
                        }
                    ]
                }
            ],
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
