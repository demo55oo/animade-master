const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://stablediffusionapi.com", // Replace with the base URL of your API
      changeOrigin: true,
    })
  );
};
