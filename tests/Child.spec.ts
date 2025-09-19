import { mount } from '@vue/test-utils'
import Child from '../src/components/Child.vue'

describe('Child.vue', () => {
  it('affiche le titre passé en prop', () => {
    const wrapper = mount(Child, { props: { title: 'Click me' } })
    expect(wrapper.text()).toContain('Click me')
  })

  it('émet un événement increment au clic', async () => {
    const wrapper = mount(Child, { props: { title: 'Click me' } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('increment')
  })
})