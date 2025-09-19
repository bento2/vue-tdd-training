import { mount } from '@vue/test-utils'
import NameForm from '../src/components/NameForm.vue'

describe('NameForm.vue', () => {
  it('affiche firstname, lastname et fullName', () => {
    const wrapper = mount(NameForm, { props: { firstname: 'John', lastname: 'Doe' } })
    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('Doe')
    expect(wrapper.text()).toContain('John Doe')
  })

  it('met à jour fullName quand les inputs changent', async () => {
    const wrapper = mount(NameForm, { props: { firstname: 'John', lastname: 'Doe' } })
    await wrapper.find('input[name="firstname"]').setValue('Jane')
    expect(wrapper.text()).toContain('Jane Doe')
  })
})