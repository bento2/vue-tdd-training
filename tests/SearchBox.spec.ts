import { mount } from '@vue/test-utils'
import SearchBox from '../src/components/SearchBox.vue'

describe('SearchBox.vue', () => {
  it('affiche un champ input vide au départ', () => {
    const wrapper = mount(SearchBox)
    expect(wrapper.find('input').element.value).toBe('')
  })

  it('affiche un log de recherche quand on tape du texte', async () => {
    const wrapper = mount(SearchBox)
    await wrapper.find('input').setValue('Vue 3')
    expect(wrapper.text()).toContain('Recherche : Vue 3')
  })
})