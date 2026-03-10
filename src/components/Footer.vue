<template>
  <footer class="hero-gradient text-white">
    <!-- Wave top -->
    <div style="line-height: 0; overflow: hidden;">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" class="block w-full" style="transform: rotate(180deg);">
        <path fill="white" fill-opacity="0.4" d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,32 L1440,60 L0,60 Z" />
        <path fill="white" d="M0,48 C480,16 960,60 1440,32 L1440,60 L0,60 Z" />
      </svg>
    </div>

    <div class="container mx-auto px-6 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand -->
        <div class="flex items-center gap-3">
          <img alt="It's All Water, LLC logo" src="../assets/logo-bare.png" class="h-8 opacity-80" />
          <span class="font-bold text-lg">It's All Water, LLC</span>
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6 text-blue-200 text-sm">
          <a href="https://www.linkedin.com/in/michaelscottwright/" target="_blank" rel="noopener" class="hover:text-white transition-colors">
            <i class="i simple-icons:linkedin text-xl"></i>
          </a>
          <a href="https://github.com/itsxallwater" target="_blank" rel="noopener" class="hover:text-white transition-colors">
            <i class="i simple-icons:github text-xl"></i>
          </a>
          <a href="https://www.mwright.dev/" target="_blank" rel="noopener" class="hover:text-white transition-colors font-medium">Blog</a>
          <router-link to="/privacy" class="hover:text-white transition-colors font-medium">Privacy</router-link>
        </div>
      </div>

      <div class="border-t border-white border-opacity-10 mt-6 pt-6 text-center text-blue-200 text-sm">
        © 2015–{{ new Date().getFullYear() }} It's All Water, LLC
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
