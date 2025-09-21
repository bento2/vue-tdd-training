import { mount } from '@vue/test-utils'
import Provider from '../src/components/Provider.vue'

describe('Provider.vue and Injector.vue', () => {
  it('affiche la valeur fournie dans le composant enfant', () => {
    const wrapper = mount(Provider)
    expect(wrapper.text()).toContain('hello from provider')
  })
})
