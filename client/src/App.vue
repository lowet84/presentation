<template>
  <div id="app">
    <v-app>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TestControllergetOne } from './client/Test'

export default class extends Vue {
}
</script>

<style lang="css">
</style>