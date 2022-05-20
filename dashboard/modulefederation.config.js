const deps = require('./package.json').dependencies;
const hosts = require('./src/config/modulefederation.hosts.json');

module.exports = {
  name: 'dashboard',
  remotes: {
    app2: `app2@${hosts.app2}/remoteEntry.js`,
  },
  filename: 'remoteEntry.js',
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
