<template>
  <div>
    <skeleton>
      <form-student :user="user" :formSubmit="addUser"/>
    </skeleton>
  </div>
</template>
<script>
import InputText from "../../components/form/inputText.vue";
import SelectOptionUser from "../../components/form/selectOptionUser.vue";
import skeleton from "../../components/partials/skeleton.vue";
import FormStudent from "../../components/student/formStudent.vue";
export default {
  components: { skeleton, InputText, SelectOptionUser, FormStudent },
  layout: "admin",
  data() {
    return {
      user: {
        name: "",
        address: "",
        phone: "",
        gender: "M",
      },
    };
  },
  methods: {
    async requestPost(endpoint, payload) {
      return await this.$axios({
        method: "POST",
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
    addUser() {
      this.$swal({
        title: "Apakah kamu yakin",
        text: "menambahkan data " + this.user.name + " sebagai pengguna",
        icon: "warning",
        showCancelButton: true,
      }).then(async ({ isDissmissed }) => {
        if (!isDissmissed) {
          const response = await this.requestPost("users", this.user);
          if (response.success) this.$router.push("/student");
        }
      });
    },
  },
};
</script>