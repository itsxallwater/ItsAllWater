<template>
  <div>
    <TransitionBottom />
    <footer class="container mx-auto w-full text-center text-gray-700">
      <h2 class="text-lg">
        © 2015-Current - It's All Water, LLC -
        <router-link to="privacy">Privacy</router-link>
      </h2>
    </footer>
  </div>
</template>

<script>
import TransitionBottom from "./TransitionBottom.vue";

export default {
  name: "Footer",
  components: {
    TransitionBottom,
  },
};
</script>
