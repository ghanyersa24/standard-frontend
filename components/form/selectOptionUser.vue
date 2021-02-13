<template>
  <div class="form-group" :class="addClass">
    <label for="inputEmail">{{ name }}</label>
    <select class="form-control mb-3 rounded-pill" v-model="value">
      <option value="" selected disabled>Pilih {{name}}</option>
      <option v-for="(item,i) in rows" :key="i" :value="item.value">{{item.label}}</option>
    </select>
  </div>
</template>
<script>
export default {
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
  props: {
    addClass: {
      type: String,
      default: "",
    },
    rows: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    val: {
      type: String,
      default: "",
    },
  },
};
</script>