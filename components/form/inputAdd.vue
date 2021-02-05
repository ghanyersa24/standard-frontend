<template>
  <div class="input-group ">
    <input type="text" class="form-control rounded-pill" placeholder="Judul buku" style="height:70px" @keyup.enter="add" v-model="bookInput">
    <div class="input-group-append">
      <button class="btn btn-outline-primary rounded-pill ml-3" type="button" @click="add" style="width:50px"> <i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bookInput: "",
    };
  },
  methods: {
    add() {
      if (this.bookInput) {
        this.$emit("value", this.bookInput);
        this.bookInput = "";
      }
    },
  },
};
</script>