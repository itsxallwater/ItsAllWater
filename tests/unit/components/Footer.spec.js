import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';

const mountFooter = () =>
  mount(Footer, {
    global: {
      stubs: {
        'router-link': { template: '<a><slot /></a>' },
        TransitionBottom: true,
      },
    },
  });

describe('Footer', () => {
  it('renders the copyright text', () => {
    const wrapper = mountFooter();
    expect(wrapper.text()).toContain("© 2015-Current - It's All Water, LLC");
  });

  it('renders a Privacy link', () => {
    const wrapper = mountFooter();
    expect(wrapper.text()).toContain('Privacy');
  });

  it('renders a footer element', () => {
    const wrapper = mountFooter();
    expect(wrapper.find('footer').exists()).toBe(true);
  });
});
