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
              Software Development &amp; IT Consulting
            </p>
            <h1 class="text-5xl lg:text-6xl font-black leading-tight mb-6">
              Hi, I'm<br />
              <span class="text-gradient">Mike Wright</span>
            </h1>
            <p class="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              CTO. Freelance developer. Open source contributor.<br class="hidden lg:block" />
              Based in Phoenix, AZ.
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
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" class="block w-full h-16 lg:h-20">
          <path fill="white" fill-opacity="0.4" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,45 L1440,80 L0,80 Z" />
          <path fill="white" d="M0,64 C480,20 960,80 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
