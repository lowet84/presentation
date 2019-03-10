<template>
  <section>
    <div>
      <button class="restart-button">restart</button>
      <div class="ssh-box">
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
        <div>sdföiosdjlijsdlfi</div>
      </div>
    </div>
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
.restart-button{
  padding: 5px;
  background: #585858;
  font-size: 0.5em;
}
.ssh-box {
  margin-left: 4em !important;
  margin-right: 4em !important;
  background: darkgray;
  border: 1px solid rgb(49, 49, 49) !important;
  border-radius: 5px;
  padding: 1em !important;
  text-align: left;
  font-size: 0.3em !important;
  color: black;
  font-weight: 700 !important;
  font-family: monospace !important;
  overflow: scroll !important;
}
</style>