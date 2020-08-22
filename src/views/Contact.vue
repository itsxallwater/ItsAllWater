<template>
  <div class="lg:mt-24">
    <!--Hero-->
    <div
      class="container px-3 mb-12 lg:mb-48 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div class="w-full md:w-3/5 py-6">
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Let's Talk
        </h1>
        <p class="leading-normal text-xl mb-8">
          In general, I live my life guided by two major principles. The first?
          No one is responsible for your happiness more than you. The second?
          Conversations are free (okay, <i>mostly</i> free&mdash;but in this
          case, definitely free!). If you would like to chat, drop me a line! Or
          if you prefer, you can reach me via email or Twitter.
        </p>
        <ul>
          <li v-for="item in items">
            <IconLink :item="item" :hideAlt="false" />
          </li>
        </ul>
      </div>
      <!--Right Col-->
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-left"
      >
        <form
          action="https://formspree.io/mike.wright@itsallwater.net"
          method="POST"
          class="w-full max-w-lg container px-3 mx-auto"
        >
          <input type="text" name="_gotcha" style="display: none;" />
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email-address"
            >
              Email Address
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-email-address"
              type="text"
              placeholder="your@email.com"
            />
            <p class="text-xs italic">
              We'll never share your email with anyone!
            </p>
          </div>
          <div class="mb-6">
            <label
              class="block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-message"
            >
              Message
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-message"
              placeholder="Hi Mike! Let's chat."
              rows="3"
            />
          </div>
          <div class="mb-6">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Say hi!
            </button>
          </div>
        </form>
      </div>
    </div>
    <TransitionTop />
  </div>
</template>

<script>
import IconLink from "../components/IconLink.vue";
import TransitionTop from "../components/TransitionTop.vue";

export default {
  name: "Home",
  components: {
    IconLink,
    TransitionTop,
  },
  data() {
    return {
      items: [
        {
          url: "mailto:mike.wright@itsallwater.net",
          icon: "i ic:baseline-email",
          alt: "mikewright@itsallwater.net",
        },
        {
          url: "https://twitter.com/MikeMcMikaelson",
          icon: "i simple-icons:twitter",
          alt: "@MikeMcMikaelson",
        },
      ],
    };
  },
};
</script>
