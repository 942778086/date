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
    app.use(createProxyMiddleware('/balance', {
        target: 'http://39.98.108.180:8082',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/balance": "/balance"
        }
    }))
    app.use(createProxyMiddleware('/pay', {
        target: 'http://39.98.108.180:8082',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
            "^/pay": "/pay"
        }
    }))
}