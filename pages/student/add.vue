<template>
  <div>
    <skeleton>
      <form-student :user="user" :formSubmit="addUser" />
    </skeleton>
  </div>
</template>
<script>
import InputText from "../../components/form/inputText.vue";
import SelectOptionUser from "../../components/form/selectOptionUser.vue";
import skeleton from "../../components/partials/skeleton.vue";
import FormStudent from "../../components/student/formStudent.vue";
import request from "@/mixins/request";
export default {
  components: { skeleton, InputText, SelectOptionUser, FormStudent },
  layout: "admin",
  mixins: [request],
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
    addUser() {
      this.$swal({
        title: "Apakah kamu yakin",
        text: "menambahkan data " + this.user.name + " sebagai pengguna",
        icon: "warning",
        showCancelButton: true,
      }).then(async ({ isDissmissed }) => {
        if (!isDismissed) {
          const response = await this.requestPost("users", this.user);
          if (response.success) this.$router.push("/student");
        }
      });
    },
  },
};
</script>