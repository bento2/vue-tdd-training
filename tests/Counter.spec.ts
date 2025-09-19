import { mount } from '@vue/test-utils'
import Counter from '../src/components/Counter.vue'

describe('Counter.vue', () => {
  it('affiche un compteur à 0 au départ', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('0')
  })

  it('incrémente le compteur au clic', async () => {
    const wrapper = mount(Counter)
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('1')
  })
})