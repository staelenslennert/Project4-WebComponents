const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'https://blackboxapi20181126121241.azurewebsites.net/api',
//         ws: true,
//         changeOrigin: true
//       },
//     }
//   },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        //openAnalyzer: false
      }),
      new GenerateSW()
    ],
    optimization: {}
  },
  pwa: {
    name: "eCatalog",
    themeColor: "#b31919",
    msTileColor: "#b31919",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'public/service-worker.js',
        // ...other Workbox options...
      
    }
  }
};
