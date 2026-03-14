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

      <!-- Wave transition to white -->
      <div class="page-wave">
        <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" class="block w-full">
          <path fill="white" fill-opacity="0.12" d="M0,40 C240,100 480,10 720,55 C960,100 1200,20 1440,65 L1440,120 L0,120 Z"/>
          <path fill="white" fill-opacity="0.35" d="M0,68 C360,28 720,100 1080,58 C1260,38 1380,72 1440,78 L1440,120 L0,120 Z"/>
          <path fill="white" d="M0,92 C480,52 960,112 1440,78 L1440,120 L0,120 Z"/>
        </svg>
      </div>
    </section>

    <!-- Inverted mirror of footer wave: dark rolling hills descending into white -->
    <div class="bg-white" style="line-height: 0; overflow: hidden;">
      <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" class="block w-full">
        <path fill="#0a1628" fill-opacity="0.12" d="M0,80 C240,20 480,110 720,65 C960,20 1200,100 1440,55 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" fill-opacity="0.35" d="M0,52 C360,92 720,20 1080,62 C1260,82 1380,48 1440,42 L1440,0 L0,0 Z"/>
        <path fill="#0a1628" d="M0,28 C480,68 960,8 1440,42 L1440,0 L0,0 Z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
