<template>
  <div class="box">
    <v-btn class="reset" color="grey darken-2" @click="reset">Reset</v-btn>
    <div v-for="(result,index) in results" :key="`result${index}`">{{result}}</div>
    <v-btn
      v-if="currentAction"
      type="submit"
      color="green darken-3"
      class="button"
      @click="runCurrentAction"
    >{{currentAction}}</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'

@Component
export default class extends Vue {
  @Prop() actions
  @Prop() name

  reset() {
    this.counter = 0
    this.results = []
  }

  async runCurrentAction() {
    var res = await (await fetch(`/api/command/${this.name}/${this.counter}`, {
      method: 'POST'
    })).json()
    this.results.push(`===> ${this.currentAction}`)
    this.results = this.results.concat(res.map(d=>d.split('+').join(' ')))
    this.results.push('--------------------------------')
    this.counter++
  }

  counter = 0
  results: string[] = []

  get currentAction() {
    return this.actions[this.counter]
      ? this.actions[this.counter].displayName
      : undefined
  }
}
</script>
 
<style>
.box {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background: darkgray;
  border: 1px solid rgb(49, 49, 49) !important;
  border-radius: 5px;
  padding: 1em !important;
  font-size: 0.5em !important;
  color: black;
  font-weight: 700 !important;
  font-family: monospace !important;
  overflow: scroll !important;
  height: 40em;
  text-align: left;
}
.reset {
  font-size: 0.7em;
  height: 2em;
}
</style>