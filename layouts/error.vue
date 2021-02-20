<template>
  <div class="container-fluid text-center">
    <div v-if="error.statusCode===404">
      <img src="https://pulaumas-pembangunan.com/404.png" class="w-50" alt="">
    </div>
    <nuxt-link to="/">kembali ke menu utama</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["error"],
};
</script>