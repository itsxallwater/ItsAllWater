import { mount } from '@vue/test-utils';
import Contact from '@/views/Contact.vue';

const mountContact = () =>
  mount(Contact, {
    global: {
      stubs: {
        TransitionTop: true,
        IconLink: true,
      },
    },
  });

describe('Contact', () => {
  it("renders the Let's Talk heading", () => {
    const wrapper = mountContact();
    expect(wrapper.find('h1').text()).toBe("Let's Talk");
  });

  it('renders the email input field', () => {
    const wrapper = mountContact();
    const emailInput = wrapper.find('#grid-email-address');
    expect(emailInput.exists()).toBe(true);
    expect(emailInput.attributes('placeholder')).toBe('your@email.com');
  });

  it('renders the message textarea', () => {
    const wrapper = mountContact();
    const messageArea = wrapper.find('#grid-message');
    expect(messageArea.exists()).toBe(true);
    expect(messageArea.element.tagName).toBe('TEXTAREA');
  });

  it('renders the submit button with correct label', () => {
    const wrapper = mountContact();
    const button = wrapper.find('button');
    expect(button.text()).toBe('Say hi!');
  });

  it('includes a hidden honeypot field for spam reduction', () => {
    const wrapper = mountContact();
    const honeypot = wrapper.find('input[name="_gotcha"]');
    expect(honeypot.exists()).toBe(true);
    expect(honeypot.attributes('type')).toBe('text');
  });

  it('submits the form to Formspree', () => {
    const wrapper = mountContact();
    const form = wrapper.find('form');
    expect(form.attributes('action')).toContain('formspree.io');
  });

  it('uses POST method for form submission', () => {
    const wrapper = mountContact();
    const form = wrapper.find('form');
    expect(form.attributes('method')).toBe('POST');
  });

  it('provides two contact items (email and Twitter)', () => {
    const wrapper = mountContact();
    expect(wrapper.vm.items).toHaveLength(2);
  });

  it('includes an email contact item', () => {
    const wrapper = mountContact();
    const emailItem = wrapper.vm.items.find((i) =>
      i.url.startsWith('mailto:')
    );
    expect(emailItem).toBeDefined();
  });

  it('includes a Twitter contact item', () => {
    const wrapper = mountContact();
    const twitterItem = wrapper.vm.items.find((i) =>
      i.url.includes('twitter.com')
    );
    expect(twitterItem).toBeDefined();
  });
});
