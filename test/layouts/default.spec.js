import { mount } from '@vue/test-utils'
import defaultComponent from '@/layouts/default'

describe('layouts/default.vue', () => {
  test('Is a vue instance', () => {
    const wrapper = mount(defaultComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
