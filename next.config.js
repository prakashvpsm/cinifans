const withPWA = require('next-pwa');
const withImages = require('next-images')


module.exports = withImages(withPWA({
    pwa: {
      register: false,
      skipWaiting: false,
      dest: 'public'
    },
    // only for dev
    onDemandEntries: {
      maxInactiveAge: 1000 * 30 * 60,
      pagesBufferLength: 10
    },
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = { fs: 'empty' };
      }
      return config;
    }
}))
