<template>
  <div id="app">
    <v-btn color="info" @click="incr()">{{value}}</v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
const counter = namespace('counter')

@Component
export default class extends Vue {
  @counter.Getter value
  @counter.Action incr
}
</script>

<style lang="css">
</style>