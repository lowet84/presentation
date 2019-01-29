import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import counter from './store/Counter';
import authentication from './store/Authentication'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    counter,
    authentication
  }
});

// @ts-ignore
import Vuetify from 'vuetify/lib/components/Vuetify'
// @ts-ignore
import VApp from 'vuetify/lib/components/VApp'
// @ts-ignore
import VGrid from 'vuetify/lib/components/VGrid'
// @ts-ignore
import VBtn from 'vuetify/lib/components/VBtn'
// @ts-ignore
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    VBtn
  },
  directives: {
    Ripple
  }
})

import 'vuetify/src/stylus/app.styl'
import ServiceBase from './service/ServiceBase';

// @ts-ignore
ServiceBase.init(window.url)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})