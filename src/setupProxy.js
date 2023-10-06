const { createProxyMiddleware }  =  require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/user', {
        target: 'http://47.92.199.153:8083',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/user": "/user"
        }
    }))
}