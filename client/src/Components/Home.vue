<template>
  <div class="reveal">
    <div class="slides">
      <template v-for="(slide,slideIndex) in slides">
        <section :key="`slide${slideIndex}`">
          <template v-for="(section, sectionIndex) in slide.sections">
            <section :key="`section${sectionIndex}`">
              <template v-for="(item, itemIndex) in section.items">
                <h1 v-if="item.type==='header1'" :key="`item${itemIndex}`">{{item.value}}</h1>
                <h2 v-else-if="item.type==='header2'" :key="`item${itemIndex}`">{{item.value}}</h2>
                <h3 v-else-if="item.type==='header3'" :key="`item${itemIndex}`">{{item.value}}</h3>
                <h4 v-else-if="item.type==='header4'" :key="`item${itemIndex}`">{{item.value}}</h4>
                <h5 v-else-if="item.type==='header5'" :key="`item${itemIndex}`">{{item.value}}</h5>
                <h6 v-else-if="item.type==='header6'" :key="`item${itemIndex}`">{{item.value}}</h6>
                <div v-else-if="item.type==='text'" :key="`item${itemIndex}`">{{item.value}}</div>
              </template>
            </section>
          </template>
        </section>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
const slides = namespace('slides')

@Component
export default class extends Vue {
  @slides.Getter slides

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
.controls-arrow {
  color: rgb(189, 189, 189) !important;
}
</style>