<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <home/>
      </v-content>
    </v-app>
    <v-dialog v-model="loginDialog" max-width="20em" persistent>
      <v-form v-on:submit.prevent>
        <v-card>
          <v-card-title>
            <h1>Log in</h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Password"
              hint="At least 8 characters"
              min="8"
              v-model="password"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn type="submit" color="primary" @click="tryLogin">Log in</v-btn>
            <div>&nbsp;</div>
            <div class="wrongpw" v-if="wrong">Wrong password</div>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State, Getter, Action, Mutation, namespace } from 'vuex-class'
const authentication = namespace('authentication')
const slides = namespace('slides')

@Component
export default class extends Vue {
  password = ''
  wrong = false

  async tryLogin() {
    if (!(await this.login(this.password))) this.wrong = true
    else{
      this.readSlides()
    }
  }

  mounted() {
    this.load()
    
  }

  async load(){
    await this.isLoggedIn()
    if(!this.loginDialog){
      this.readSlides()
    }
  }

  @authentication.Action isLoggedIn
  @authentication.Getter loginDialog
  @authentication.Action login
  @slides.Action readSlides
}
</script>

<style lang="css">
.wrongpw {
  color: red;
}
::-webkit-scrollbar { 
    display: none; 
}
</style>