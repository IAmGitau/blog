import { mount } from '@vue/test-utils'
import Home from '~/pages/index'

describe('pages/articles/index.vue', () => {
  test('Is a vue instance', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
  })
})
