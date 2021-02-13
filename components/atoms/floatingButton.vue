<template>
  <nuxt-link :to="link">
      <button class="btn btn-info" style="position:fixed; bottom:36px; right:20px; padding:2em; z-index:9999;"><span style="font-size:2em">+</span></button>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    link: { type: String, default: "/" },
  },
};
</script>