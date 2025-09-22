import { mount } from '@vue/test-utils'
import Watcher from '../src/components/Watcher.vue'

describe('Watcher.vue', () => {
  it('met à jour le log quand le message change', async () => {
    const wrapper = mount(Watcher)
    await wrapper.find('input').setValue('New message')
    expect(wrapper.text()).toContain('Message changed to: New message')
  })
})
