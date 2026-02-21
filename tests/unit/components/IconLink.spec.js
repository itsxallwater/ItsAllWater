import { mount } from '@vue/test-utils';
import IconLink from '@/components/IconLink.vue';

describe('IconLink', () => {
  const item = {
    url: 'https://example.com',
    icon: 'i test-icon',
    alt: 'Test Link',
  };

  it('renders a link with the correct href', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: false } });
    expect(wrapper.find('a').attributes('href')).toBe('https://example.com');
  });

  it('opens links in a new tab with rel=noopener', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: false } });
    const a = wrapper.find('a');
    expect(a.attributes('target')).toBe('_blank');
    expect(a.attributes('rel')).toBe('noopener');
  });

  it('renders the icon element with the correct classes', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: false } });
    const icon = wrapper.find('i');
    expect(icon.exists()).toBe(true);
    expect(icon.classes()).toContain('i');
    expect(icon.classes()).toContain('test-icon');
  });

  it('displays the alt text when hideAlt is false', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: false } });
    const span = wrapper.find('span');
    expect(span.text()).toBe('Test Link');
    expect(span.classes()).not.toContain('md:hidden');
  });

  it('applies md:hidden class to alt text when hideAlt is true', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: true } });
    const span = wrapper.find('span');
    expect(span.classes()).toContain('md:hidden');
  });

  it('sets the link alt attribute from item.alt', () => {
    const wrapper = mount(IconLink, { props: { item, hideAlt: false } });
    expect(wrapper.find('a').attributes('alt')).toBe('Test Link');
  });
});
