<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center vw-100">
      <skeleton>
        <div class="text-center">
          <h1 class="mb-5">WEB FUNDAMENTAL</h1>
        </div>
        <div class="progress" style="display: none;">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Sandbox</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#">Buku</a>
            </div>
          </div>
        </nav>
        <div class="container mt-3">
          <h4 class="clearfix">
            <span class="float-left">List data buku</span>
            <button class="float-right btn btn-info" type="button" data-toggle="modal" data-target="#modal-add">Tambah
              Buku</button>
          </h4>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nama</th>
                <th scope="col">Kategori</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody id="bookList">
              <tr v-for="(book,i) in listBook" :key="i">
                <td>{{i+1}}</td>
                <td>{{book.name}}</td>
                <td> {{book.type_book.name}}</td>
                <td>
                  <button class="btn btn-sm btn-danger" @click="deleteBook(book.id,book.name)" type="button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal fade" id="modal-add" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Tambah Buku</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form id="form-add" @submit.prevent="createBook">
                <div class="modal-body">
                  <div class="form-group">
                    <label for="name">Nama Buku</label>
                    <input id="name" class="form-control" type="text" name="name" required>
                  </div>
                  <div class="form-group">
                    <label for="kategori">Kategori</label>
                    <select id="kategori" class="form-control" name="type_books_id" required>
                      <option value="" selected disabled>Pilih kategori</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </skeleton>
    </div>
  </div>
</template>
<script>
import request from "../mixins/request.vue";
export default {
  mixins: [request],
  data() {
    return {
      listBook: [],
    };
  },
  mounted() {
    this.getListCategory();
    this.getListBook();
  },
  methods: {
    async getListBook() {
      $(".progress").show();
      const request = await this.requestGet(
        "https://mybook-order.herokuapp.com/books"
      );
      this.listBook = request.data;
      $(".progress").hide();
    },
    getListCategory() {
      $.ajax({
        type: "GET",
        url: "https://mybook-order.herokuapp.com/books/type",
        dataType: "json",
        success: function (response) {
          response.data.forEach((data) => {
            $("#kategori").append(
              `<option value="${data.id}">${data.name}</option>`
            );
          });
        },
      });
    },
    async createBook() {
      const payload = {
        name: $("#name").val(),
        type_books_id: $("#kategori").val(),
      };
      $(".progress").show();
      $("#modal-add").modal("hide");
      const request = await this.requestPost(
        "https://mybook-order.herokuapp.com/books",
        payload
      );
      if (request.success) {
        this.getListBook();
        this.$swal({
          title: "Berhasil!",
          text: request.message,
          icon: "success",
        });
        $("#name").val("");
        $("#kategori").val("");
      } else {
        $("#modal-add").modal("show");
        this.$swal({
          title: "Gagal!",
          text: request.message,
          icon: "error",
        });
      }
    },
    async deleteBook(id, name) {
      $(".progress").show();
      const payload = { id, name };
      try {
        const { isConfirmed } = await this.konfirm(
          "ingin menghapus buku " + name
        );
        if (isConfirmed) {
          const request = await this.requestDelete(
            "https://mybook-order.herokuapp.com/books",
            payload
          );
          this.getListBook();
          this.$swal({
            title: "Success",
            text: request.message,
            icon: "success",
          });
        }
      } catch (error) {
        this.$swal({
          title: "Error",
          text: error.response.message,
          icon: "error",
        });
      }
      $(".progress").hide();
    },
  },
};
</script>