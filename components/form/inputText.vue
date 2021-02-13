<template>
  <div class="form-group" :class="addClass">
    <label for="inputEmail">{{ name }}</label>
    <input id="inputEmail" v-model="value" :type="type" class="form-control" :placeholder="'input '+name">
  </div>
</template>
<script>
export default {
  props: {
    addClass: {
      type: String,
      default: "",
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
  computed: {
    value: {
      get() {
        return this.val;
      },
      set(val) {
        this.$emit("value", val);
      },
    },
  },
};
</script>
