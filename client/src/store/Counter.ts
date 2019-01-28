import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true })
export default class Counter2 extends VuexModule {
  count = 0

  @Mutation increment(delta: number) {
    this.count += delta
  }
  @Mutation decrement(delta: number) {
    this.count -= delta
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' }) incr() {
    console.log(`going from ${this.count} to ${this.count + 5}`)
    return 5
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' }) decr() {
    return 5
  }

  get value() {
    return this.count
  }
}
