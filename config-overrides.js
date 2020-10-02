const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = []
  }
  config.plugins.push(
    new WorkboxPlugin.InjectManifest({
      swSrc: './sw.js',
    })
  )
  return config
} 