import { mount } from '@vue/test-utils'
import ComplexState from '../src/components/ComplexState.vue'

describe('ComplexState.vue', () => {
  it('affiche x=0 et y=0 au départ', () => {
    const wrapper = mount(ComplexState)
    expect(wrapper.text()).toContain('x: 0')
    expect(wrapper.text()).toContain('y: 0')
  })

  it('incrémente x et y avec deux boutons séparés', async () => {
    const wrapper = mount(ComplexState)
    const [btnX, btnY] = wrapper.findAll('button')
    await btnX.trigger('click')
    await btnY.trigger('click')
    expect(wrapper.text()).toContain('x: 1')
    expect(wrapper.text()).toContain('y: 1')
  })
})