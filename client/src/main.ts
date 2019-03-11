import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import command from './store/CommandStore'
import authentication from './store/Authentication'
import slides from './store/SlidesStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    command,
    authentication,
    slides
  }
})

// @ts-ignore
import Vuetify from 'vuetify/lib/components/Vuetify'
// @ts-ignore
import VApp from 'vuetify/lib/components/VApp'
// @ts-ignore
import VGrid from 'vuetify/lib/components/VGrid'
// @ts-ignore
import VBtn from 'vuetify/lib/components/VBtn'
// @ts-ignore
import VCard from 'vuetify/lib/components/VCard'
// @ts-ignore
import VForm from 'vuetify/lib/components/VForm'
// @ts-ignore
import VDialog from 'vuetify/lib/components/VDialog'
// @ts-ignore
import VTextField from 'vuetify/lib/components/VTextField'
// @ts-ignore
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VGrid,
    VBtn,
    VCard,
    VForm,
    VDialog,
    VTextField
  },
  directives: {
    Ripple
  }
})

import 'vuetify/src/stylus/app.styl'
import ServiceBase from './service/ServiceBase'

import Terminal from './Components/Pages/Terminal.vue'
Vue.component('terminal', Terminal)

import Page from './Components/Pages/Page.vue'
Vue.component('page', Page)

import Home from './Components/Home.vue'
Vue.component('home', Home)

ServiceBase.init('/api/')
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
