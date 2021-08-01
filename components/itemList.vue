<template>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" aria-label="Checkbox for following text input" :checked="checked" @change="push(index)">
      </div>
    </div>
    <input type="text" v-model="name" readonly class="form-control" aria-label="Text input with checkbox">
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    index: Number,
    checked: Boolean,
  },
  methods: {
    push(val) {
      this.$emit("check", val);
    },
  },
};
</script>