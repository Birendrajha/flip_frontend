const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api', 
        { target: 'https://secret-reaches-34188.herokuapp.com/' }
    ));
}