import { mount } from '@vue/test-utils'
import ColorChanger from '../src/components/ColorChanger.vue'
import { vColor } from '../src/directives/color'

describe('ColorChanger.vue and v-color directive', () => {
  it('change la couleur de fond de l\'élément', async () => {
    const wrapper = mount(ColorChanger, {
      global: {
        directives: {
          color: vColor
        }
      }
    })

    const div = wrapper.find('div[style*="border"]')
    expect(div.attributes('style')).toContain('background-color: red')
  })
})
