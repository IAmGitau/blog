import { mount } from '@vue/test-utils'
import errorComponent from '@/layouts/error'

describe('layouts/default.vue', () => {
  test('Is a vue instance', () => {
    const wrapper = mount(errorComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
