const { defineConfig } = require('@vue/cli-service')

const qmonus = require("./qmonus-dev.js")({
  target   : "https://portal-fe354278-a197-48e7-a1db-abb340de9e59.sdk-lab.qmonus.net/v3#/",
  username : "exampleUser",
  password : "example1234",
})
console.debug(` headers : `, qmonus)

module.exports = defineConfig({
  transpileDependencies: true,
  devServer : {
    host: 'localhost',
    port: 8080,
    open: false,
    ...qmonus,
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
