import { mount } from '@vue/test-utils';
import Portfolio from '@/views/Portfolio.vue';

const mountPortfolio = () =>
  mount(Portfolio, {
    global: {
      stubs: {
        TransitionTop: true,
        IconLink: true,
      },
    },
  });

describe('Portfolio', () => {
  it('renders the My Work heading', () => {
    const wrapper = mountPortfolio();
    expect(wrapper.find('h1').text()).toBe('My Work');
  });

  it('has 9 portfolio items', () => {
    const wrapper = mountPortfolio();
    expect(wrapper.vm.items).toHaveLength(9);
  });

  it('includes a link to the resume PDF', () => {
    const wrapper = mountPortfolio();
    const resumeItem = wrapper.vm.items.find((i) => i.alt === 'Resume');
    expect(resumeItem).toBeDefined();
    expect(resumeItem.url).toContain('resume.pdf');
  });

  it('includes a LinkedIn link', () => {
    const wrapper = mountPortfolio();
    const linkedInItem = wrapper.vm.items.find((i) => i.alt === 'LinkedIn');
    expect(linkedInItem).toBeDefined();
    expect(linkedInItem.url).toContain('linkedin.com');
  });

  it('includes a GitHub link', () => {
    const wrapper = mountPortfolio();
    const githubItem = wrapper.vm.items.find((i) => i.alt === 'GitHub');
    expect(githubItem).toBeDefined();
    expect(githubItem.url).toContain('github.com');
  });

  it('includes a Docker Hub link', () => {
    const wrapper = mountPortfolio();
    const dockerItem = wrapper.vm.items.find((i) => i.alt === 'Docker');
    expect(dockerItem).toBeDefined();
    expect(dockerItem.url).toContain('hub.docker.com');
  });

  it('credits Icones for icons', () => {
    const wrapper = mountPortfolio();
    expect(wrapper.text()).toContain('Icones');
  });

  it('all items have required url, icon, and alt properties', () => {
    const wrapper = mountPortfolio();
    wrapper.vm.items.forEach((item) => {
      expect(item.url).toBeTruthy();
      expect(item.icon).toBeTruthy();
      expect(item.alt).toBeTruthy();
    });
  });
});
