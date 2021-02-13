<template>
  <div>
    <floating-button link="/student/add" />
    <skeleton>
      <div class="table-responsive">
        <table class="table" id="data-user">
          <thead>
            <tr>
              <th>no</th>
              <th>name</th>
              <th>address</th>
              <th>phone</th>
              <th>gender</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,i) in users" :key="user.id">
              <td>{{i+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.address}}</td>
              <td>{{user.phone}}</td>
              <td>{{user.gender}}</td>
              <td><button class="btn btn-outline-primary" type="button">detail</button></td>
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
export default {
  components: { skeleton, FloatingButton },
  layout: "admin",
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
    // await this.setDatatable();
  },

  methods: {
    async getUsers() {
      if (this.users.length == 0) {
        const {
          data: { data: response },
        } = await this.$axios({
          method: "GET",
          url: "users",
        });
        this.$store.commit("users/SET_LIST", response);
      }
    },
    setDatatable() {
      $(document).ready(function () {
        $("#data-user").DataTable();
      });
    },
  },
};
</script>