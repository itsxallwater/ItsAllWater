import { mount } from '@vue/test-utils';
import Navbar from '@/components/Navbar.vue';

const mountNavbar = () =>
  mount(Navbar, {
    global: {
      stubs: { 'router-link': { template: '<a><slot /></a>' } },
    },
  });

describe('Navbar', () => {
  it('renders the site name', () => {
    const wrapper = mountNavbar();
    expect(wrapper.text()).toContain("It's All Water");
  });

  it('renders all primary navigation links', () => {
    const wrapper = mountNavbar();
    const text = wrapper.text();
    expect(text).toContain('Home');
    expect(text).toContain('About');
    expect(text).toContain('Portfolio');
    expect(text).toContain('Blog');
    expect(text).toContain('Contact');
  });

  it('renders the external Blog link with correct href', () => {
    const wrapper = mountNavbar();
    const blogLink = wrapper.find('a[href="https://www.mwright.dev/"]');
    expect(blogLink.exists()).toBe(true);
    expect(blogLink.attributes('target')).toBe('_blank');
    expect(blogLink.attributes('rel')).toBe('noopener');
  });

  it('starts with mobile menu hidden', () => {
    const wrapper = mountNavbar();
    expect(wrapper.vm.showMenu).toBe(false);
  });

  it('toggles mobile menu open when the hamburger button is clicked', async () => {
    const wrapper = mountNavbar();
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.showMenu).toBe(true);
  });

  it('toggles mobile menu closed on a second click', async () => {
    const wrapper = mountNavbar();
    await wrapper.find('button').trigger('click');
    await wrapper.find('button').trigger('click');
    expect(wrapper.vm.showMenu).toBe(false);
  });

  it('initializes scroll position at 0', () => {
    const wrapper = mountNavbar();
    expect(wrapper.vm.scrollPosition).toBe(0);
  });

  it('registers a scroll listener on mount', () => {
    const addSpy = jest.spyOn(window, 'addEventListener');
    mountNavbar();
    expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    addSpy.mockRestore();
  });
});
