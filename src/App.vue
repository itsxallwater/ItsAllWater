<template>
  <div>
    <Navbar />
    <section class="text-gray-700">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(90deg, #62cef7 0%, #fff 100%);
}

/* 

#04b0f2 
#62CEF7
#5bbad5
#A1E1FA

*/
</style>
