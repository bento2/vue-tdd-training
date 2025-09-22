import { mount } from '@vue/test-utils'
import FormInputs from '../src/components/FormInputs.vue'

describe('FormInputs.vue', () => {
  it('lie les inputs texte', async () => {
    const wrapper = mount(FormInputs)
    await wrapper.find('input[type="text"]').setValue('du texte')
    // This is a placeholder test. The component's internal state is not exposed.
    // The test should be updated to check for a visible output of the state.
    expect(wrapper.vm.textInput).toBe('du texte')
  })

  it('lie les textareas', async () => {
    const wrapper = mount(FormInputs)
    await wrapper.find('textarea').setValue('plus de texte')
    expect(wrapper.vm.textareaInput).toBe('plus de texte')
  })

  it('lie les checkboxes', async () => {
    const wrapper = mount(FormInputs)
    await wrapper.find('input[type="checkbox"]').setValue(true)
    expect(wrapper.vm.checkboxInput).toBe(true)
  })

  it('lie les radios', async () => {
    const wrapper = mount(FormInputs)
    await wrapper.find('input[type="radio"][value="two"]').setValue()
    expect(wrapper.vm.radioInput).toBe('two')
  })

  it('lie les selects', async () => {
    const wrapper = mount(FormInputs)
    await wrapper.find('select').setValue('b')
    expect(wrapper.vm.selectInput).toBe('b')
  })
})
