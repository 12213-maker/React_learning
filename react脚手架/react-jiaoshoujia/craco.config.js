const CracoLessPlugin = require('craco-less');
const path = require('path')
const resolve = dir=>path.resolve(__dirname,dir)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack:{
    alias:{
      "@":resolve("src"),
      "component":resolve("src/component")

    }
  }
};