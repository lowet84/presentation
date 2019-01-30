<template>
  <div class="reveal">
    <div class="slides">
      <section>Single Horizontal Slide</section>
      <section>
        <section>Vertical Slide 1</section>
        <terminal type="side1" :web="true">
          <div>Content</div>
        </terminal>
      </section>
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
</style>