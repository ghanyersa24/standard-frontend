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
import request from "@/mixins/request";
export default {
  components: { skeleton, FormStudent },
  layout: "admin",
  mixins: [request],
  data() {
    return {
      user: this.$store.state.users.detail,
    };
  },
  created() {
    if (!this.user.id) this.$router.push("/student");
  },
  methods: {
    updateForm() {
      this.$swal({
        title: "Apakah kamu yakin?",
        text: "memperbaruhi data " + this.user.name,
        icon: "warning",
        showCancelButton: true,
      }).then(async ({ isDismissed }) => {
        if (!isDismissed) {
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