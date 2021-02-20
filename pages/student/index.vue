<template>
  <div>
    <floating-button link="/student/add" />
    <skeleton>
      <div class="table-responsive">
        <table class="table" id="data-user">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,i) in users" :key="user.id">
              <td>{{i+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.address}}</td>
              <td>{{user.phone}}</td>
              <td>{{user.gender}}</td>
              <td witdh="20%">
                <button class="btn btn-outline-danger btn-sm" @click="del(user)" type="button"><i class="fas fa-trash"></i></button>
                <button class="btn btn-outline-primary btn-sm" @click="link(user)" type="button"><i class="fas fa-eye"></i> Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </skeleton>
  </div>
</template>
<script>
import skeleton from "@/components/partials/skeleton.vue";
import FloatingButton from "../../components/atoms/floatingButton.vue";
import request from "@/mixins/request";
export default {
  components: { skeleton, FloatingButton },
  layout: "admin",
  mixins: [request],
  data() {
    return {
      users: this.$store.state.users.listUsers,
    };
  },
  asyncData({ store }) {
    store.dispatch("title/SET_TITLE", "LIST STUDENT");
  },
  async mounted() {
    await this.getUsers();
    await this.setDatatable();
  },

  methods: {
    async getUsers(force = false) {
      if (this.users.length == 0 || force) {
        const { data: response } = await this.requestGet("users");
        this.$store.dispatch("users/SET_LIST", response);
        this.users = response;
      }
    },
    setDatatable() {
      $(document).ready(function () {
        $("#data-user").DataTable();
      });
    },
    link(user) {
      this.$store.dispatch("users/SET_DETAIL", user);
      this.$router.push("/student/detail/" + user.id);
    },
    del(user) {
      this.konfirm("menghapus data " + user.name).then(
        async ({ isDissmissed }) => {
          if (!isDissmissed) {
            const req = await this.requestDelete("users", user);
            if (req.success) {
              this.getUsers(true);
            }
          }
        }
      );
    },
  },
};
</script>