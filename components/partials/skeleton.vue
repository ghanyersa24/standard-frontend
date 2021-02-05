<template>
  <div class="p-3 card">
    <div :class="overflow?'overflow-y':''" style="height: 70vh">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    overflow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
