// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: "vue-pwa",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // configure the workbox plugin
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: "src/registerServiceWorker.js"
      // ...other Workbox options...
    },
    manifestOptions: {
      name: "pwa.name",
      short_name: "pwa.name",
      start_url: "/",
      display: "standalone",
      theme_color: "#4DBA87"
    }
  },
  // Injected PWA webpack chain rule
  chainWebpack: config => {
    config.plugin('workbox')
  }
};
