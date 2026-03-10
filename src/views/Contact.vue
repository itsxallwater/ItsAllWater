<template>
  <div>
    <!-- Page header -->
    <section class="page-header-gradient relative pt-20">
      <div class="container mx-auto px-6 py-16 text-white text-center">
        <p class="text-brand-light uppercase tracking-widest text-sm font-semibold mb-3">
          Get in Touch
        </p>
        <h1 class="text-4xl lg:text-5xl font-black mb-4">Let's Talk</h1>
        <p class="text-blue-100 text-lg max-w-xl mx-auto">
          Conversations are free. Drop me a line.
        </p>
      </div>
      <!-- Wave -->
      <div class="page-wave">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full h-12 lg:h-16">
          <path fill="white" fill-opacity="0.4" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,32 L1440,60 L0,60 Z" />
          <path fill="white" d="M0,48 C480,16 960,60 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">

          <!-- Left: intro + email -->
          <div class="w-full lg:w-2/5">
            <h2 class="text-2xl font-bold text-gray-900 mb-1">Say Hi</h2>
            <div class="w-12 h-1 bg-brand-cyan rounded mb-5"></div>
            <p class="text-gray-600 leading-relaxed mb-8">
              I live my life by two principles: no one is responsible for your happiness more than you, and conversations are free. If you'd like to chat about a project, an idea, or anything else — use the form or reach me directly.
            </p>

            <a
              href="mailto:mike.wright@itsallwater.net"
              class="flex items-center gap-3 bg-blue-50 hover:bg-brand-cyan hover:text-white text-brand-navy border border-blue-100 hover:border-brand-cyan px-5 py-4 rounded-xl font-semibold transition-all group"
            >
              <svg class="w-6 h-6 fill-current text-brand-cyan group-hover:text-white shrink-0" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>mike.wright@itsallwater.net</span>
            </a>
          </div>

          <!-- Right: form -->
          <div class="w-full lg:w-3/5">
            <h2 class="text-2xl font-bold text-gray-900 mb-1">Send a Message</h2>
            <div class="w-12 h-1 bg-brand-cyan rounded mb-5"></div>
            <form
              action="https://formspree.io/mike.wright@itsallwater.net"
              method="POST"
              class="space-y-5"
            >
              <input type="text" name="_gotcha" style="display: none;" />

              <div>
                <label
                  class="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                  for="contact-email"
                >Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition"
                />
                <p class="text-xs text-gray-400 mt-1.5">Your email will never be shared.</p>
              </div>

              <div>
                <label
                  class="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2"
                  for="contact-message"
                >Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hi Mike! Let's chat."
                  rows="5"
                  class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn-gradient text-white font-bold px-8 py-3 rounded-full shadow-md text-base"
              >Send it ✈</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
