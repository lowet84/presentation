import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true })
export default class CommandStore extends VuexModule {
  count = 0
  @Mutation setCommands(delta: number) {
    this.count -= delta
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' }) decr() {
    return 5
  }

  get commands() {
    return this.count
  }
}

