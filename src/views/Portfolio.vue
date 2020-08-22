<template>
  <div>
    <!--Hero-->
    <div
      class="container px-3 mb-8 md:mb-4 mx-auto flex flex-wrap flex-col md:flex-row items-center"
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
        <h1
          class="my-4 text-4xl lg:text-5xl font-bold leading-tight w-full lg:w-auto"
        >
          My Work
        </h1>
        <div class="flex flex-wrap mb-4 leading-normal text-xl md:text-3xl">
          <div class="w-full md:w-1/3 md:h-12" v-for="item in items">
            <ProfileItem :item="item" :hideAlt="true" />
          </div>
        </div>
        <span class="md:text-sm italic"
          >Icons thanks to
          <a href="https://icones.netlify.app/" rel="noopener" target="_blank"
            >Icones</a
          >!</span
        >
      </div>
    </div>
    <TransitionTop />
  </div>
</template>

<script>
import TransitionTop from "../components/TransitionTop.vue";
import ProfileItem from "../components/ProfileItem.vue";

export default {
  name: "Portfolio",
  components: {
    ProfileItem,
    TransitionTop,
  },
  data() {
    return {
      items: [
        { url: "./resume.pdf", icon: "i icomoon-free:profile", alt: "Resume" },
        {
          url: "https://www.donovanvsdevin.com",
          icon: "i mdi:basketball-hoop-outline",
          alt: "Donovan vs. Devin",
        },
        {
          url: "https://www.linkedin.com/in/michaelscottwright/",
          icon: "i simple-icons:linkedin",
          alt: "LinkedIn",
        },
        {
          url: "https://github.com/itsxallwater",
          icon: "i simple-icons:github",
          alt: "GitHub",
        },
        {
          url: "https://stackoverflow.com/story/mikewright",
          icon: "i simple-icons:stackoverflow",
          alt: "Stack Overflow",
        },
        {
          url: "https://www.hackerrank.com/mike_wright",
          icon: "i simple-icons:hackerrank",
          alt: "Hacker Rank",
        },
        {
          url: "https://angel.co/mike-wright-15",
          icon: "i simple-icons:angellist",
          alt: "Angel List",
        },
        {
          url: "https://app.pluralsight.com/profile/mike-wright-dc",
          icon: "i simple-icons:pluralsight",
          alt: "Pluralsight",
        },
        {
          url: "https://hub.docker.com/u/itsxallwater",
          icon: "i simple-icons:docker",
          alt: "Docker",
        },
      ],
    };
  },
};
</script>
