<template>
  <div id="app">
    <div>Hello world!</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-typed'
import { init } from './client/gateway'
import { TestControllergetOne } from './client/Test'

@Component()
export default class extends Vue {
  constructor() {
    super()
    this.load()
  }

  async load() {
    // @ts-ignore
    init({ url: window.url })
    var response = await TestControllergetOne(0)
    console.log(response.data)
  }
}
</script>

<style lang="css">
</style>