import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Portfolio from "./views/Portfolio.vue";
import Privacy from "./views/Privacy.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  { path: "/about", component: About, meta: { title: "About" } },
  { path: "/contact", component: Contact, meta: { title: "Contact" } },
  { path: "/portfolio", component: Portfolio, meta: { title: "Portfolio" } },
  { path: "/privacy", component: Privacy, meta: { title: "Privacy" } },
  { path: "/:path(.*)", component: NotFound },
];
