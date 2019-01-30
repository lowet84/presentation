<template>
  <section>
    <div>{{typeText}}</div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) type: string
  @Prop(Boolean) web: boolean

  get typeText(){
      switch(this.type){
          case 'side': return 'Side panel'
          default: return 'N/A'
      }
  }
}
</script>

<style>
</style>