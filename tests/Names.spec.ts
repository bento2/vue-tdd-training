import { mount } from '@vue/test-utils'
import Names from '../src/components/Names.vue'

describe('Names.vue', () => {
  it('affiche une liste de noms avec inputs', () => {
    const wrapper = mount(Names)
    const inputs = wrapper.findAll('input')
    expect(inputs).toHaveLength(2)
  })

  it('réordonne les noms correctement avec :key', async () => {
    const wrapper = mount(Names)
    const [first] = wrapper.findAll('input')
    await first.setValue('Custom Alice')
    await wrapper.find('button').trigger('click')
    expect(wrapper.html()).toContain('Custom Alice')
  })
})