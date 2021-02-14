<template>
  <div>
    <skeleton>
      <form-student :user="user" :formSubmit="updateForm" />
    </skeleton>
  </div>
</template>
<script>
import skeleton from "../../../components/partials/skeleton.vue";
import FormStudent from "../../../components/student/formStudent.vue";
export default {
  components: { skeleton, FormStudent },
  layout: "admin",
  data() {
    return {
      user: this.$store.state.users.detail,
    };
  },
  created() {
    if (!this.user.id) this.$router.push("/student");
  },
  methods: {
    async requestPut(endpoint, payload) {
      return await this.$axios({
        method: "PUT",
        url: endpoint,
        data: payload,
      }).then(({ data: res }) => {
        if (res.success) {
          this.$swal({
            icon: "success",
            title: "Berhasil!",
            text: res.message,
          });
        } else {
          this.$swal({
            icon: "error",
            title: "Gagal!",
            text: res.message,
          });
        }
        return res;
      });
    },
    updateForm() {
      this.$swal({
        title: "Apakah kamu yakin?",
        text: "memperbaruhi data " + this.user.name,
        icon: "warning",
        showCancelButton: true,
      }).then(async ({ isDissmissed }) => {
        if (!isDissmissed) {
          const req = await this.requestPut("users", this.user);
          if (req.success) {
            this.$store.dispatch("users/UPDATE_LIST", this.user);
            this.$router.push("/student");
          }
        }
      });
    },
  },
};
</script>