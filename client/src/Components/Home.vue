<template>
  <div class="reveal">
    <div class="slides">
      <section>
        <div>{{language==='swe'?'Språk':'Language'}}</div>
        <div class="language-select">
          <v-btn color="primary" @click="selectLanguage('swe')">swe{{language==="swe"?'&lt;==':''}}</v-btn>
          <v-btn color="accent" @click="selectLanguage('eng')">eng{{language==="eng"?'&lt;==':''}}</v-btn>
        </div>
      </section>
      <template v-for="(slide,slideIndex) in slides">
        <section :key="`slide${slideIndex}`">
          <template v-for="(section, sectionIndex) in slide.sections">
            <section :key="`section${sectionIndex}`" :data-background="section.demo?'#505050':''">
              <template v-for="(item, itemIndex) in section.items">
                <h1 v-if="item.type==='header1'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h1>
                <h2 v-else-if="item.type==='header2'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h2>
                <h3 v-else-if="item.type==='header3'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h3>
                <h4 v-else-if="item.type==='header4'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h4>
                <h5 v-else-if="item.type==='header5'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h5>
                <h6 v-else-if="item.type==='header6'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</h6>
                <div v-else-if="item.type==='text'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">{{text(item)}}</div>
                <div v-else-if="item.type==='imageS'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">
                  <img :src="`images/${item.value}`" class="image-small">
                </div>
                <div v-else-if="item.type==='imageL'" :key="`item${itemIndex}`" :class="`${item.fragment?'fragment':''}`">
                  <img :src="`images/${item.value}`" class="image-large">
                </div>
                <div v-else-if="item.type==='imageBar'" :key="`item${itemIndex}`">
                  <img v-for="image in item.value.split(';')" :key="image" :src="`images/${image}`" class="image-small" :class="`${item.fragment?'fragment':''}`">
                </div>
                <Terminal v-else-if="item.type==='terminalWide'" :key="`item${itemIndex}`" :actions="item.actions" :name="item.value"></Terminal>
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
import Terminal from './Terminal.vue'
const slides = namespace('slides')

@Component({components:{Terminal}})
export default class extends Vue {
  @slides.Getter slides

  language = 'swe'

  get text(){
    return (item: {value: string, eng?: string}) => {
      return (this.language === 'eng'?item.eng || item.value : item.value )
    }
  }

  selectLanguage(language: string){
    this.language = language
  }

  @Watch('$route.path')
  onRouteChanged(val: string, oldVal: string) {
    console.log('route changed')
  }
}
</script>
 
<style>
@import url('../../node_modules/reveal.js/css/reveal.css');
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  font-weight: 600;
  text-transform: none;
}

h1 {
  font-size: 2.5em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h2 {
  font-size: 1.6em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h3 {
  font-size: 1.3em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h4 {
  font-size: 1em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h5 {
  font-size: 0.8em !important;
  text-transform: uppercase;
  font-weight: 600 !important;
}
h6 {
  font-size: 0.5em !important;
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
.image-small{
  height: 5em;
  padding: 0.3em !important;
  background: rgb(54, 54, 54) !important;
  margin: 1em !important;
}
.image-large{
  height: 15em;
}
.demo{
  background: darkgray;
}
.language-select{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>