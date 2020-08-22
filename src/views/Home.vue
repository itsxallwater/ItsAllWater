<template>
  <div>
    <!--Hero-->
    <div
      class="container px-3 mb-16 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div class="w-full md:w-3/5 items-center">
        <img
          alt="It's All Water, LLC logo"
          class="lg:w-4/5 w-3/5 m-auto z-50"
          src="../assets/logo.png"
        />
      </div>
      <!--Right Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-left"
      >
        <p class="uppercase w-full lg:block hidden">
          Software Development & IT consulting
        </p>
        <h1
          class="my-4 text-4xl lg:text-5xl font-bold leading-tight w-full lg:w-auto"
        >
          Welcome
        </h1>
        <p class="leading-normal text-2xl mb-6">
          If you need a hand in managing your technical debt, you've come to the
          right place.
        </p>
        <router-link
          to="contact"
          class="mx-auto lg:mx-0 bg-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
        >
          Contact
        </router-link>
      </div>
    </div>
    <TransitionTop />
  </div>
</template>

<script>
import TransitionTop from "../components/TransitionTop.vue";

export default {
  name: "Home",
  components: {
    TransitionTop,
  },
};
</script>
