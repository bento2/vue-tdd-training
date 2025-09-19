import { mount } from '@vue/test-utils'
import TodoList from '../src/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('affiche la liste au départ', () => {
    const wrapper = mount(TodoList)
    expect(wrapper.findAll('li')).not.toHaveLength(0)
  })

  it('masque la liste quand on clique sur Toggle', async () => {
    const wrapper = mount(TodoList)
    await wrapper.find('button').trigger('click')
    expect(wrapper.findAll('li')).toHaveLength(0)
  })
})