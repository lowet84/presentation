<template>
  <div class="reveal">
    <div class="slides">
      <page></page>
      <terminal></terminal>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Reveal from '../reveal'

@Component
export default class extends Vue {
  mounted() {
    Reveal.initialize()
  }

  @Watch('$route.path')
  onRouteChanged(val: string, oldVal: string) {
    console.log('route changed')
  }
}
</script>

<style>
@import url('../../node_modules/reveal.js/css/reveal.css');
h1 {
  font-size: 3.5em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h2 {
  font-size: 3em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h3 {
  font-size: 2.5em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h4 {
  font-size: 2em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h5 {
  font-size: 1.5em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
body {
  font-size: 2rem;
  font-family: 'Helvetica' !important;
}
.controls-arrow{
  color:rgb(189, 189, 189) !important;
}
</style>