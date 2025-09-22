import { mount } from '@vue/test-utils'
import MultiSelect from '../src/components/MultiSelect.vue'

describe('MultiSelect.vue', () => {
  const options = [
    { value: 'op1', label: 'Option 1' },
    { value: 'op2', label: 'Option 2' },
    { value: 'op3', label: 'Option 3' }
  ]

  it('affiche les options', () => {
    const wrapper = mount(MultiSelect, {
      props: { options, modelValue: [] }
    })
    const checkboxes = wrapper.findAll('input[type="checkbox"]')
    expect(checkboxes).toHaveLength(3)
    expect(wrapper.text()).toContain('Option 1')
    expect(wrapper.text()).toContain('Option 2')
    expect(wrapper.text()).toContain('Option 3')
  })

  it('coche les options sélectionnées initialement', () => {
    const wrapper = mount(MultiSelect, {
      props: { options, modelValue: ['op2'] }
    })
    const checkbox = wrapper.find('input[value="op2"]')
    expect((checkbox.element as HTMLInputElement).checked).toBe(true)
  })

  it('émet un événement update:modelValue quand une option est sélectionnée', async () => {
    const wrapper = mount(MultiSelect, {
      props: { options, modelValue: [] }
    })
    await wrapper.find('input[value="op1"]').setValue(true)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([['op1']])
  })

  it('émet un événement update:modelValue quand une option est désélectionnée', async () => {
    const wrapper = mount(MultiSelect, {
      props: { options, modelValue: ['op1', 'op2'] }
    })
    await wrapper.find('input[value="op1"]').setValue(false)
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([['op2']])
  })
})
