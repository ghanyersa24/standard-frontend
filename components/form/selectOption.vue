<template>
  <div class="input-group">
    <div style="width:85%">
      <select class="form-control mb-3 rounded-pill" v-model="reader.user">
        <option value="" selected>Pilih pembaca</option>
        <option v-for="(item,i) in users" :key="i" :value="item">{{item}}</option>
      </select>
      <select class="form-control rounded-pill" v-model="reader.book">
        <option value="" disabled selected>Pilih Buku</option>
        <option v-for="(item,i) in books" :key="i" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="input-group-append">
      <button class="btn btn-outline-primary rounded-pill ml-3" type="button" @click="add" style="width:50px"> <i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reader: {
        book: "",
        user: "",
      },
    };
  },
  props: {
    books: {
      type: Array,
      default: () => [],
    },
    users: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    add() {
      if (this.reader.book && this.reader.user) {
        this.$swal({
          title: "Apakah kamu yakin",
          text: this.reader.book + " membaca buku " + this.reader.user,
          icon: "warning",
          showCancelButton: true,
        }).then(({ isDismissed }) => {
          if (!isDismissed) {
            this.$emit("reader", this.reader);
            this.reader = { book: "", user: "" };
          }
        });
      }
    },
  },
};
</script>