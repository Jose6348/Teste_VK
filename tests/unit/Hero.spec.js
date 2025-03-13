import { shallowMount } from '@vue/test-utils'
import Hero from '@/components/sales-page/Hero.vue'

describe('Hero.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Hero)
  })

  it('renders properly', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the main heading', () => {
    const heading = wrapper.find('h1')
    expect(heading.exists()).toBe(true)
    expect(heading.text()).toContain('Barriga Negativa')
  })

  it('contains call to action buttons', () => {
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('contains social proof section', () => {
    const socialProof = wrapper.find('.social-proof')
    expect(socialProof.exists()).toBe(true)
  })

  it('contains testimonial images', () => {
    const testimonialImages = wrapper.findAll('img[alt*="Depoimento"]')
    expect(testimonialImages.length).toBeGreaterThan(0)
  })
}) 