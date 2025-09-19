import { mount } from '@vue/test-utils'
import Life from '../src/components/Life.vue'

describe('Life.vue', () => {
  it('affiche un message monté au render', () => {
    const wrapper = mount(Life)
    expect(wrapper.text()).toContain('Monté')
  })

  it('ajoute un message détruit après unmount', () => {
    const wrapper = mount(Life)
    wrapper.unmount()
    // Vérifier dans ton composant que tu gères bien le cleanup
  })
})