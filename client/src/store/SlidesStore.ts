import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import SlidesService from '../service/SlidesService'

@Module({ namespaced: true })
export default class SlidesStore extends VuexModule {
  service = new SlidesService()
  slidesItems: Slides[] = []

  @Mutation setSlides(slides: Slides[]){
    this.slidesItems = slides
  }

  @Action({commit: 'setSlides'}) async readSlides(){
    var slides = await this.service.readSlides()
    return slides
  }

  get slides(){
    return this.slidesItems
  }
}

