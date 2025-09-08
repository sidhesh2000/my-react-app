const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy for Keystone (authentication)
  app.use(
    '/api', 
    createProxyMiddleware({
      target: 'https://keystone.tcsecp.com:5000',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/api': '' },
    })
  );

  // Proxy for Cinder (volumes)
  app.use(
    '/cinder',
    createProxyMiddleware({
      target: 'https://cinder.tcsecp.com:8776',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/cinder': '' },
    })
  );

  // Proxy for Neutron (networking)
  app.use(
    '/neutron',
    createProxyMiddleware({
      target: 'https://neutron.tcsecp.com:9696',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/neutron': '' },
    })
  );
  app.use(
    '/nova',
    createProxyMiddleware({
      target: 'https://nova.tcsecp.com:8774',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/nova': '' },
    })
  );
  app.use(
    '/glance',
    createProxyMiddleware({
      target: 'https://glance.tcsecp.com:9292',
      changeOrigin: true,
      secure: false,
      pathRewrite: { '^/glance': '' },
    })
  );
  
};
