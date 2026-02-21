import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

const mountHome = () =>
  mount(Home, {
    global: {
      stubs: {
        'router-link': { template: '<a><slot /></a>' },
        TransitionTop: true,
      },
    },
  });

describe('Home', () => {
  it('renders the Welcome heading', () => {
    const wrapper = mountHome();
    expect(wrapper.find('h1').text()).toBe('Welcome');
  });

  it('renders the tagline about technical debt', () => {
    const wrapper = mountHome();
    expect(wrapper.text()).toContain('technical debt');
  });

  it('renders the service description', () => {
    const wrapper = mountHome();
    expect(wrapper.text()).toContain('Software Development & IT consulting');
  });

  it('renders a Contact call-to-action link', () => {
    const wrapper = mountHome();
    expect(wrapper.text()).toContain('Contact');
  });

  it('renders the company logo image', () => {
    const wrapper = mountHome();
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('alt')).toContain("It's All Water");
  });
});
