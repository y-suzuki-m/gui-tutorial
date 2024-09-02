import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// axiosのインポート
import api  from './plugins/api.js'

import { store } from './store/index.js'

loadFonts()
;(async ()=>{

  // Get session API
  await api.getSession()

  createApp(App)
    .use(store)
    .use(vuetify)
    // appに反映
    .use(api)
    .mount('#app')
})();
