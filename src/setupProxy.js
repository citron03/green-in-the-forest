const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://openapi.forest.go.kr/openapi/service/cultureInfoService',
      pathRewrite: {
        '^/api': '',
      },
    }),
  );
};