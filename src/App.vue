<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
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
/* Brand gradient backgrounds */
.hero-gradient {
  background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 50%, #04b0f2 100%);
}

.page-header-gradient {
  background: linear-gradient(135deg, #0a1628 0%, #1a3a5c 60%, #04b0f2 100%);
}

/* Gradient text utility */
.text-gradient {
  background: linear-gradient(90deg, #62cef7 0%, #04b0f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Gradient button */
.btn-gradient {
  background: linear-gradient(90deg, #04b0f2 0%, #5bbad5 100%);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.btn-gradient:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Card hover lift */
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card-hover:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(4, 176, 242, 0.18);
}

</style>
