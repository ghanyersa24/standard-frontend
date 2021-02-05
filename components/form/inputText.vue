<template>
  <div :class="addClass">
    <label for="inputEmail">{{ name }}</label>
    <input id="inputEmail" v-model="val" :type="type" class="form-control" :placeholder="'input '+name">
    <p>{{ val }}</p>
  </div>
</template>
<script>
export default {
  props: {
    addClass: {
      type: String,
      default: "col-12",
    },
    name: {
      type: String,
      default: "username",
    },
    val: {
      type: String,
      default: "xxxx",
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
