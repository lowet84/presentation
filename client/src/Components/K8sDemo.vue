<template>
  <div>
    <div class="button-flex">
      <v-btn @click="startStop">{{startStopText}}</v-btn>
      <input type="range" min="1" max="20" value="1" class="slider" id="myRange" @change="change">
      <v-btn @click="scale">scale to: {{replicas}}</v-btn>
    </div>

    <div class="demo-box">
      <div v-for="box in boxes" :key="box.name" class="node-box">
        <div class="node-header">{{box.name}}</div>
        <div class="node-flex">
          <div v-for="proc in box.procs" :key="proc.name">
            <div class="proc-box" :style="style(proc.stuff)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
import { setTimeout, clearTimeout, setInterval, clearInterval } from 'timers'
import { stringify } from 'querystring'
import ServiceBase from '../service/ServiceBase'
import urljoin from 'url-join'

@Component
export default class extends Vue {
  @Prop() host

  change(value: any){
    this.replicas = value.target.value
  }

  items: any = {}

  timer = null

  replicas = 1

  async scale() {
    var token = localStorage.getItem('token')
    var url = `/api/command/scale/${this.replicas}`
    var result: any = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
  }

  startStop() {
    if (!this.timer) this.timer = setInterval(this.update, 100)
    else {
      clearInterval(this.timer)
      this.timer = null
      this.items = {}
    }
  }

  get boxes() {
    return Object.keys(this.items).map(d => ({
      name: d,
      procs: Object.keys(this.items[d]).map(e => ({
        name: e,
        stuff: this.items[d][e]
      }))
    }))
  }

  get style() {
    return (value: { color: any; countdown: number }) => {
      var factor = value.countdown / 100
      var r = value.color.r * factor
      var g = value.color.g * factor
      var b = value.color.b * factor
      return `background:rgb(${r},${g},${b})`
    }
  }

  async update() {
    var result = await fetch('https://k8sdemo.duckdns.org/api')
    var json = await result.json()

    var temp = Object.assign({}, this.items)
    if (!temp[json.name]) temp[json.name] = {}
    temp[json.name][json.id] = { color: json.color, countdown: 100 }

    Object.values(temp).forEach((item: any) => {
      Object.keys(item).forEach((key: string) => {
        var value: any = item[key]
        value.countdown = value.countdown - 1
        if (value.countdown <= 0) delete item[key]
      })
    })
    this.items = temp
  }

  get startStopText() {
    return this.timer ? 'Stop' : 'Start'
  }
}
</script>
 
<style>
.button-flex {
  display: flex;
  flex-direction: row;
}

.demo-box {
  background: darkgray;
  color: black;
  height: 15em;
  width: 30em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}

.node-box {
  border-style: solid !important;
  border-width: 0.1em !important;
  border-color: black !important;
  margin: 1em !important;
  background: gray;
  color: white;
}

.node-flex {
  display: flex;
  flex-direction: row;
}

.proc-box {
  width: 1.7em !important;
  height: 2em !important;
}

.node-header{
  font-size: 0.8em !important;
}
</style>