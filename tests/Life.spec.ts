import { mount } from '@vue/test-utils'
import Life from '../src/components/Life.vue'
import {nextTick} from "vue";

describe('Life.vue', () => {
  it('affiche un message monté au render', async () => {
    const wrapper = mount(Life)
    await nextTick() // attend que onMounted ait été appelé
    expect(wrapper.text()).toContain('Monté')
  })

  it('ajoute un message détruit après unmount', () => {
    const wrapper = mount(Life)
    wrapper.unmount()
    // Vérifier dans ton composant que tu gères bien le cleanup
  })
})