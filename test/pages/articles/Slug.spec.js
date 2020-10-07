import { mount } from '@vue/test-utils'
import Slug from '~/pages/articles/_slug'

describe('pages/articles/_slug.vue', () => {
  test('Is a vue instance', () => {
    const wrapper = mount(Slug)
    expect(wrapper.vm).toBeTruthy()
  })
})
