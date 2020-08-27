import Vue from 'vue'
import Vuetify from 'vuetify'

import { mount, RouterLinkStub } from '@vue/test-utils'
import Index from '@/pages/index.vue'

Vue.use(Vuetify)

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index, { stubs: { NuxtLink: RouterLinkStub } })
    expect(wrapper.vm).toBeTruthy()
  })
})
