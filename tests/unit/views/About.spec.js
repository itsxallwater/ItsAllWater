import { mount } from '@vue/test-utils';
import About from '@/views/About.vue';

const mountAbout = () =>
  mount(About, {
    global: {
      stubs: {
        TransitionTop: true,
        IconLink: true,
      },
    },
  });

describe('About', () => {
  it('renders the My Story heading', () => {
    const wrapper = mountAbout();
    expect(wrapper.find('h1').text()).toBe('My Story');
  });

  it('includes the owner name in the bio', () => {
    const wrapper = mountAbout();
    expect(wrapper.text()).toContain('Mike Wright');
  });

  it('mentions the company name in the bio', () => {
    const wrapper = mountAbout();
    expect(wrapper.text()).toContain("It's All Water, LLC");
  });

  it('renders the Currently section', () => {
    const wrapper = mountAbout();
    expect(wrapper.text()).toContain('Currently');
  });

  it('renders the Past Life section', () => {
    const wrapper = mountAbout();
    expect(wrapper.text()).toContain('Past Life');
  });

  it('links to the Zumasys website', () => {
    const wrapper = mountAbout();
    const zumasysLink = wrapper.find('a[href="https://www.zumasys.com"]');
    expect(zumasysLink.exists()).toBe(true);
  });

  it('links to the Equiant website', () => {
    const wrapper = mountAbout();
    const equiantLink = wrapper.find('a[href="https://www.equiant.com"]');
    expect(equiantLink.exists()).toBe(true);
  });

  it('has 17 current technology stack items', () => {
    const wrapper = mountAbout();
    expect(wrapper.vm.currentItems).toHaveLength(17);
  });

  it('has 7 historical technology stack items', () => {
    const wrapper = mountAbout();
    expect(wrapper.vm.historyItems).toHaveLength(7);
  });

  it('currentItems includes Vue.js', () => {
    const wrapper = mountAbout();
    const alts = wrapper.vm.currentItems.map((i) => i.alt);
    expect(alts).toContain('Vue.js');
  });

  it('currentItems includes TypeScript', () => {
    const wrapper = mountAbout();
    const alts = wrapper.vm.currentItems.map((i) => i.alt);
    expect(alts).toContain('TypeScript');
  });

  it('historyItems includes ColdFusion', () => {
    const wrapper = mountAbout();
    const alts = wrapper.vm.historyItems.map((i) => i.alt);
    expect(alts).toContain('ColdFusion');
  });

  it('links to the blog from the About page', () => {
    const wrapper = mountAbout();
    const blogLink = wrapper.find('a[href="https://www.mwright.dev/"]');
    expect(blogLink.exists()).toBe(true);
  });
});
