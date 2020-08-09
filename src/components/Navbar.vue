<template>
  <nav
    id="header"
    class="fixed w-full z-30 top-0 text-gray-700"
    :class="scrollPosition > 0 ? 'bg-white shadow' : ''"
  >
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <img
          alt="It's All Water, LLC logo"
          src="../assets/logo-bare.png"
          style="display: inline-block; height: 2.2rem; margin-right: 0.8rem;"
        />
        <span class="text-1xl lg:text-2xl">
          It's All Water
        </span>
      </div>

      <div class="block lg:hidden pr-4">
        <button
          class="flex items-center p-1 hover:text-blue-400"
          @click="this.toggleMenu()"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 p-4 lg:p-0 z-20"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <router-link
              to="/"
              class="inline-block py-2 px-4 font-bold no-underline"
              >Home
            </router-link>
          </li>
          <li class="mr-3">
            <router-link
              to="about"
              class="inline-block no-underline hover:text-blue-400 py-2 px-4"
            >
              About
            </router-link>
          </li>
          <li class="mr-3">
            <router-link
              to="portfolio"
              class="inline-block no-underline hover:text-blue-400 py-2 px-4"
            >
              Portfolio
            </router-link>
          </li>
        </ul>
        <router-link
          to="contact"
          class="mx-auto lg:mx-0 bg-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
        >
          Contact
        </router-link>
      </div>
    </div>

    <hr
      class="border-b border-blue-200 opacity-25 my-0 py-0"
      :class="scrollPosition === 0 ? 'hidden' : ''"
    />
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      showMenu: false,
      scrollPosition: 0
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
