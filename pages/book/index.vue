<template>
  <div>
    <skeleton>
      <div class="row">
        <div class="offset-3 col-md-6">
          <input-add @value="val=>this.books.push(val)" />
          <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(book,i) in books" :key="i">{{book}} <button class="btn btn-outline-danger rounded-pill" @click="remove(i)"><i class="fas fa-minus"></i></button></li>
          </ul>
        </div>
      </div>
    </skeleton>
  </div>
</template>
<script>
import skeleton from "@/components/partials/skeleton.vue";
import InputAdd from "../../components/form/inputAdd.vue";
export default {
  components: { skeleton, InputAdd },
  layout: "admin",
  data() {
    return {
      books: [],
    };
  },
  methods: {
    add() {
      this.books.push(this.bookInput);
      this.bookInput = "";
    },
    remove(index) {
      this.books = this.books.filter((book, i) => i != index);
      console.log(this.books);
    },
  },
};
</script>