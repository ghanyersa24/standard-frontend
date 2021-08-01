<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center vw-100">
      <skeleton>
        <div v-if="code!=='buka-sandbox-1'" class="d-flex justify-content-center h-100">
          <div class="d-flex align-items-center ">
            <input type="text" class="form-control rounded-pill" v-model="code" placeholder="Kode">
          </div>
        </div>
        <div v-else>
          <div class="text-center">
            <h1 class="mb-5">SANDBOX FRONTEND 1</h1>
          </div>
          <div class="row">
            <div class="col-md-4">
              <input-add placeholder="Judul Buku" @value="(val)=>this.books.push(val)" />
              <list-active type="buku" :list="books" @list="(val)=>this.books=val" />
            </div>
            <div class="col-md-4">
              <input-add placeholder="Nama Pembaca" @value="(val)=>this.users.push(val)" />
              <list-active type="pembaca" :list="users" @list="(val)=>this.users=val" />
            </div>
            <div class="col-md-4">
              <select-option :books="books" :users="users" @reader="(val)=>this.readers=val" />
              <list-active type="riwayat baca" :list="readers" @list="getReaders" />
            </div>
          </div>
        </div>
      </skeleton>
    </div>
  </div>
</template>
<script>
import InputAdd from "../components/form/inputAdd.vue";
import ListActive from "../components/list/listActive.vue";
import titleStisla from "../components/partials/titleStisla.vue";
export default {
  components: { titleStisla, InputAdd, ListActive },
  // layout: "admin",
  data() {
    return {
      code: "",
      books: ["The Last Wizard", "of the Century"],
      users: ["Ghany", "Abdillah", "Ersa"],
      listReader: [{ user: "Ghany", book: "of the Century" }],
    };
  },
  computed: {
    readers: {
      set(value) {
        this.listReader.push(value);
      },
      get() {
        return this.listReader.map((item) => item.user + " - " + item.book);
      },
    },
  },
  methods: {
    getReaders(values) {
      this.listReader = values.map((item) => ({
        user: item.split(" - ")[0],
        book: item.split(" - ")[1],
      }));
    },
  },
};
</script>