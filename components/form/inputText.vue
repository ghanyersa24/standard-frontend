<template>
  <div class="input-group ">
    <input type="text" class="form-control rounded-pill" :placeholder="placeholder" style="height:50px" @keyup.enter="add" v-model="input">
    <div class="input-group-append">
      <button class="btn btn-outline-primary rounded-pill ml-3" type="button" @click="add" style="width:50px"> <i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  props: {
    placeholder: { type: String, default: "" },
  },
  methods: {
    add() {
      if (this.input) {
        this.$emit("value", this.input);
        this.input = "";
      } else {
        alert("input tidak boleh kosong");
      }
    },
  },
};
</script>