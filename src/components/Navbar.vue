<template>
  <nav
    id="header"
    class="fixed w-full z-30 top-0 transition-all duration-300"
    :class="scrolled || showMenu ? 'bg-white shadow-lg' : 'bg-transparent'"
  >
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-3" @click="showMenu = false">
        <img
          alt="It's All Water, LLC logo"
          src="../assets/logo-bare.png"
          class="h-9"
        />
        <span
          class="text-lg font-bold tracking-tight"
          :class="scrolled || showMenu ? 'text-gray-800' : 'text-white'"
        >It's All Water</span>
      </router-link>

      <!-- Mobile hamburger -->
      <div class="lg:hidden">
        <button
          class="p-2 rounded-lg focus:outline-none transition-colors"
          :class="scrolled || showMenu ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white hover:bg-opacity-20'"
          @click="toggleMenu()"
          aria-label="Toggle menu"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path v-if="!showMenu" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            <path v-else d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 005.7 7.11L10.59 12 5.7 16.89a1 1 0 001.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
          </svg>
        </button>
      </div>

      <!-- Desktop nav -->
      <ul class="hidden lg:flex items-center space-x-1">
        <li>
          <router-link
            to="/"
            class="px-4 py-2 rounded-lg font-medium transition-colors"
            :class="scrolled ? 'text-gray-700 hover:text-brand-cyan hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-20'"
          >Home</router-link>
        </li>
        <li>
          <router-link
            to="/about"
            class="px-4 py-2 rounded-lg font-medium transition-colors"
            :class="scrolled ? 'text-gray-700 hover:text-brand-cyan hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-20'"
          >About</router-link>
        </li>
        <li>
          <router-link
            to="/portfolio"
            class="px-4 py-2 rounded-lg font-medium transition-colors"
            :class="scrolled ? 'text-gray-700 hover:text-brand-cyan hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-20'"
          >Portfolio</router-link>
        </li>
        <li>
          <a
            href="https://www.mwright.dev/"
            class="px-4 py-2 rounded-lg font-medium transition-colors"
            :class="scrolled ? 'text-gray-700 hover:text-brand-cyan hover:bg-blue-50' : 'text-white hover:bg-white hover:bg-opacity-20'"
            target="_blank"
            rel="noopener"
          >Blog</a>
        </li>
        <li class="ml-2">
          <router-link
            to="/contact"
            class="btn-gradient text-white px-6 py-2 rounded-full font-bold shadow-md"
          >Contact</router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="showMenu"
      class="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1"
    >
      <router-link
        to="/"
        class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-cyan transition-colors"
        @click="showMenu = false"
      >Home</router-link>
      <router-link
        to="/about"
        class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-cyan transition-colors"
        @click="showMenu = false"
      >About</router-link>
      <router-link
        to="/portfolio"
        class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-cyan transition-colors"
        @click="showMenu = false"
      >Portfolio</router-link>
      <a
        href="https://www.mwright.dev/"
        class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-cyan transition-colors"
        target="_blank"
        rel="noopener"
        @click="showMenu = false"
      >Blog</a>
      <router-link
        to="/contact"
        class="block btn-gradient text-white px-4 py-3 rounded-lg font-bold text-center mt-2"
        @click="showMenu = false"
      >Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
      scrollPosition: 0,
    };
  },
  computed: {
    scrolled() {
      return this.scrollPosition > 50;
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>
