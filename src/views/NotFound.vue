<template>
  <div>
    <!-- 404 hero -->
    <section class="hero-gradient min-h-screen flex flex-col items-center justify-center text-white text-center px-6 pt-16">
      <p class="text-brand-light uppercase tracking-widest text-sm font-semibold mb-4">404</p>
      <h1 class="text-6xl lg:text-8xl font-black mb-6">
        <span class="text-gradient">Oops!</span>
      </h1>
      <p class="text-xl text-blue-100 mb-10 max-w-md">
        You've wandered into the unknown. Let's get you back on course.
      </p>
      <router-link
        to="/"
        class="btn-gradient text-white font-bold px-8 py-4 rounded-full shadow-lg text-lg"
      >← Back to Home</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
