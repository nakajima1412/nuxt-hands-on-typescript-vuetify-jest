import Vue from 'vue'
import Vuetify from 'vuetify'

import { mount } from '@vue/test-utils'
import Inspire from '@/pages/inspire.vue'

Vue.use(Vuetify)

describe('Inspire Page Componets', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Inspire)
    expect(wrapper.vm).toBeTruthy()
  })
})
