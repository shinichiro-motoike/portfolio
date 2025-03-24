import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutMe from '../AboutMe.vue'

describe('AboutMe', () => {
  it('renders properly', () => {
    const wrapper = mount(AboutMe, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
