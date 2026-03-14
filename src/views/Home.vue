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
              CTO. Freelance developer. AI solutions architect.<br class="hidden lg:block" />
              Open source contributor. Based in Phoenix, AZ.
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
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
