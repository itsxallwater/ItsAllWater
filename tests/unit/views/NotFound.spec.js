import { mount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

const mountNotFound = () =>
  mount(NotFound, {
    global: {
      stubs: {
        'router-link': { template: '<a href="/"><slot /></a>' },
        TransitionTop: true,
      },
    },
  });

describe('NotFound', () => {
  it('renders the Oops! heading', () => {
    const wrapper = mountNotFound();
    expect(wrapper.find('h1').text()).toBe('Oops!');
  });

  it('renders the lost message', () => {
    const wrapper = mountNotFound();
    expect(wrapper.text()).toContain("You've wandered into the unknown.");
  });

  it('includes a link back to the home page', () => {
    const wrapper = mountNotFound();
    expect(wrapper.text()).toContain('Time to return from whence you came');
  });

  it('the home link points to /', () => {
    const wrapper = mountNotFound();
    const homeLink = wrapper.find('a[href="/"]');
    expect(homeLink.exists()).toBe(true);
  });
});
