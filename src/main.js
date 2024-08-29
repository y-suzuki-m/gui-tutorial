import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// axiosのインポート
import api  from './plugins/api.js'

loadFonts()

createApp(App)
  .use(vuetify)
  // appに反映
  .use(api)
  .mount('#app')
