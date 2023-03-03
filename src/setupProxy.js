const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        ['/auth/login', '/auth/callback', '/api/'],
        createProxyMiddleware({
            target: 'http://127.0.0.1:7000',
            changeOrigin: true,
        })
    );
};