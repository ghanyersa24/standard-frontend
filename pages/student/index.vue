<template>
  <div>
    <title-stisla title="Daftar Student" />
    <skeleton>
      <div>
        <label for="fullName">Nama Lengkap</label>
        <input id="fullName" v-model="fullname" type="text" class="form-control">
        <p>{{fullname}}</p>
        <p>{{student}}</p>
      </div>
    </skeleton>
  </div>
</template>
<script>
import skeleton from "@/components/partials/skeleton.vue";
import InputText from "../../components/form/inputText.vue";
export default {
  components: { skeleton, InputText },
  layout: "admin",
  asyncData() {
    return {
      increment: 0,
    };
  },
  computed: {
    fullname: {
      get() {
        return this.student.fullName
      },
      set(value) {
        this.student.fullName = value;
        const name = value.split(" ");
        this.student.firstName = name[0];
        if (name.length >= 2) this.student.lastName = name[name.length - 1];
        else this.student.lastName = "";
      },
    },
  },
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        fullName: "",
      },
    };
  },
};
</script>