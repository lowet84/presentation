import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { init } from './client/gateway'

// @ts-ignore
import Vuetify from 'vuetify/lib/components/Vuetify'
// @ts-ignore
import VApp from 'vuetify/lib/components/VApp'
// @ts-ignore
import VBtn from 'vuetify/lib/components/VBtn'
// @ts-ignore
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn
  },
  directives: {
    Ripple
  }
})

import 'vuetify/src/stylus/app.styl'

// @ts-ignore
init({ url: window.url })
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})