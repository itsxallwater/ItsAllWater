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
        <li v-for="link in navLinks" :key="link.to">
          <router-link :to="link.to" :class="navLinkClass(link.to)">{{ link.label }}</router-link>
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
            :class="['btn-gradient text-white px-6 py-2 rounded-full font-bold shadow-md transition-all', isActive('/contact') ? 'active-contact' : '']"
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
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="mobileLinkClass(link.to)"
        @click="showMenu = false"
      >{{ link.label }}</router-link>
      <a
        href="https://www.mwright.dev/"
        class="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-brand-cyan transition-colors"
        target="_blank"
        rel="noopener"
        @click="showMenu = false"
      >Blog</a>
      <router-link
        to="/contact"
        :class="['block btn-gradient text-white px-4 py-3 rounded-lg font-bold text-center mt-2 transition-all', isActive('/contact') ? 'active-contact' : '']"
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
      navLinks: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/portfolio", label: "Portfolio" },
      ],
    };
  },
  computed: {
    scrolled() {
      return this.scrollPosition > 50;
    },
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
    navLinkClass(path) {
      const base = "px-4 py-2 rounded-lg transition-colors";
      if (this.isActive(path)) {
        return this.scrolled
          ? `${base} font-semibold text-brand-cyan bg-blue-50`
          : `${base} font-semibold text-white bg-white bg-opacity-25`;
      }
      return this.scrolled
        ? `${base} font-medium text-gray-700 hover:text-brand-cyan hover:bg-blue-50`
        : `${base} font-medium text-white hover:bg-white hover:bg-opacity-20`;
    },
    mobileLinkClass(path) {
      const base = "block px-4 py-3 rounded-lg font-medium transition-colors";
      return this.isActive(path)
        ? `${base} text-brand-cyan bg-blue-50`
        : `${base} text-gray-700 hover:bg-blue-50 hover:text-brand-cyan`;
    },
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

<style scoped>
.active-contact {
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.7), 0 4px 12px rgba(4, 176, 242, 0.4);
}
</style>
