<template>
  <div>
    <!-- Hero -->
    <section class="hero-gradient relative min-h-screen flex flex-col">
      <div class="flex-1 flex items-center">
        <div class="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
          <!-- Logo -->
          <div class="w-full lg:w-1/2 flex justify-center">
            <img
              alt="It's All Water, LLC"
              class="w-48 lg:w-72 drop-shadow-2xl"
              src="../assets/logo-bare.png"
            />
          </div>
          <!-- Text -->
          <div class="w-full lg:w-1/2 text-white text-center lg:text-left">
            <p class="text-brand-light uppercase tracking-widest text-sm font-semibold mb-4">
              Software Development · AI Consulting · IT Solutions
            </p>
            <h1 class="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Hi, I'm<br />
              <span class="text-gradient">Mike Wright</span>
            </h1>
            <p class="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              <span class="text-white font-semibold">Engineering leader.</span>
              <span class="text-brand-light font-semibold"> AI solutions architect.</span>
              Open source contributor and freelance developer.<br class="hidden lg:block" />
              Hands-on, pragmatic, and always building — from Phoenix, AZ.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link
                to="/contact"
                class="btn-gradient text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg"
              >Get in Touch</router-link>
              <router-link
                to="/portfolio"
                class="border-2 border-white border-opacity-60 text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-brand-dark transition-all text-lg"
              >See My Work</router-link>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Top wave: dark hills descend flush from hero into white -->
    <div class="bg-white" style="line-height: 0; overflow: hidden;">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path fill="#0a1628" fill-opacity="0.12" d="M0,0 C240,80 480,12 720,68 C960,95 1200,20 1440,0 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" fill-opacity="0.35" d="M0,0 C360,55 720,10 1080,52 C1260,65 1380,28 1440,0 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" d="M0,0 C240,28 480,4 720,22 C960,40 1200,6 1440,0 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    <!-- Capabilities -->
    <section class="bg-white pt-16 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <svg class="w-7 h-7 fill-current text-brand-cyan" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 text-sm">Software Development</h3>
            <p class="text-gray-500 text-xs leading-relaxed">Full-stack web apps, APIs, and platforms built to last</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <svg class="w-7 h-7 fill-current text-brand-cyan" viewBox="0 0 24 24"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 text-sm">AI Integration</h3>
            <p class="text-gray-500 text-xs leading-relaxed">LLM-powered tooling, agents, and AI-first product design</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <svg class="w-7 h-7 fill-current text-brand-cyan" viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 text-sm">Open Source</h3>
            <p class="text-gray-500 text-xs leading-relaxed">Active maintainer and contributor to developer tools</p>
          </div>
          <div class="flex flex-col items-center gap-3">
            <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
              <svg class="w-7 h-7 fill-current text-brand-cyan" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
            </div>
            <h3 class="font-bold text-gray-900 text-sm">IT Consulting</h3>
            <p class="text-gray-500 text-xs leading-relaxed">Strategy, architecture, and hands-on technical leadership</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
