<template>
  <a :href="item.url" target="_blank" rel="noopener" :alt="item.alt">
    <i :class="item.icon" /><span
      :class="hideAlt ? 'md:hidden pl-2' : 'ml-2'"
      >{{ item.alt }}</span
    >
  </a>
</template>

<script>
export default {
  props: {
    item: {
      url: String,
      icon: String,
      alt: String,
    },
    hideAlt: Boolean,
  },
  setup(props) {},
};
</script>
