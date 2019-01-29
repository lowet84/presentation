<template>
  <div id="app">
    <v-btn color="info" @click="login()">Log in</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
const authentication = namespace('authentication')

@Component
export default class extends Vue {
  @authentication.Action login
}
</script>

<style lang="css">
</style>