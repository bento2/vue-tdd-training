import { mount } from '@vue/test-utils'
import Card from '../src/components/Card.vue'

describe('Card.vue', () => {
  it('rend le slot par défaut', () => {
    const wrapper = mount(Card, { slots: { default: 'Contenu' } })
    expect(wrapper.text()).toContain('Contenu')
  })

  it('rend le slot nommé footer', () => {
    const wrapper = mount(Card, { slots: { footer: '<button>OK</button>' } })
    expect(wrapper.find('button').exists()).toBe(true)
  })
})