import { mount } from '@vue/test-utils'
import TaskItem from '../src/components/TaskItem.vue'

describe('TaskItem.vue', () => {
  it('n’ajoute pas de classe completed si done=false', () => {
    const wrapper = mount(TaskItem, { props: { done: false }, slots: { default: 'Test' } })
    expect(wrapper.classes()).not.toContain('completed')
  })

  it('ajoute la classe completed si done=true', () => {
    const wrapper = mount(TaskItem, { props: { done: true }, slots: { default: 'Test' } })
    expect(wrapper.classes()).toContain('completed')
  })
})