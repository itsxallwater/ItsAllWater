<template>
  <div>
    <!--Hero-->
    <div
      class="container px-3 mb-16 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div class="w-full md:w-3/5 items-center">
        <img class="lg:w-4/5 w-3/5 m-auto z-50" src="../assets/logo.png" />
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
        <ol class="leading-normal text-2xl mb-6">
          <li>
            <a href="./resume.pdf" target="_blank" rel="noopener" alt="Resume"
              >Resume</a
            >
          </li>
          <li>
            <a
              href="https://www.donovanvsdevin.com"
              alt="Donovan vs. Devin"
              target="_blank"
              rel="noopener"
              >Donovan vs. Devin</a
            >
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/michaelscottwright/"
              target="_blank"
              rel="noopener"
              alt="LinkedIn michaelscottwright"
              ><i class="fab fa-linkedin-in pr-2"></i>michaelscottwright</a
            >
          </li>
          <li>
            <a
              href="https://github.com/itsxallwater"
              target="_blank"
              rel="noopener"
              alt="GitHub itsxallwater"
              ><i class="fab fa-github-alt pr-2"></i>itsxallwater</a
            >
          </li>
          <li>
            <a
              href="https://stackoverflow.com/story/mikewright"
              target="_blank"
              rel="noopener"
              alt="StackOverflow mikewright"
              ><i class="fab fa-stack-overflow pr-2"></i>mikewright</a
            >
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/mike_wright"
              target="_blank"
              rel="noopener"
              alt="HackerRank mike_wright"
              ><i class="fab fa-hackerrank pr-2"></i>mike_wright</a
            >
          </li>
          <li>
            <a
              href="https://angel.co/mike-wright-15"
              target="_blank"
              rel="noopener"
              alt="Angel.co mike-wright-15"
              ><i class="fab fa-angellist pr-2"></i>mike-wright-15</a
            >
          </li>
          <li>
            <a
              href="https://app.pluralsight.com/profile/mike-wright-dc"
              target="_blank"
              rel="noopener"
              alt="PluralSight mike-wright-dc"
            >
              PluralSight</a
            >
          </li>
        </ol>
      </div>
    </div>
    <TransitionTop />
  </div>
</template>

<script>
import TransitionTop from "../components/TransitionTop.vue";

export default {
  name: "Portfolio",
  components: {
    TransitionTop
  }
};
</script>
