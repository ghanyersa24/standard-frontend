<template>
  <form @submit.prevent="formSubmit">
    <input-text name="Nama Lengkap" :val="user.name" @value="(val)=>this.user.name=val" />
    <input-text name="Email" :val="user.email" @value="(val)=>this.user.email=val" />
    <input-text v-if="!noPassword" type="password" name="Password" :val="user.password" @value="(val)=>this.user.password=val" />
    <input-text name=" Address" :val="user.address" @value="(val)=>this.user.address=val" />
    <input-text name="No Telepon" type="number" :val="user.phone" @value="(val)=>this.user.phone=val" />
    <select-option-user :rows="gender" name="Jenis Kelamin" :val="user.gender" @value="(val)=>this.user.gender=val" />
    <div class="text-right">
      <nuxt-link class="btn btn-secondary mr-2" to="/student">Kembali</nuxt-link>
      <button class="btn btn-primary" type="submit">Simpan</button>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      gender: [
        { value: "M", label: "M" },
        { value: "F", label: "F" },
      ],
    };
  },
  props: {
    user: {
      type: Object,
      default: () => ({
        id: "",
        name: "",
        email: "",
        password: "",
        address: "",
        phone: "",
        gender: "M",
      }),
    },
    noPassword: {
      type: Boolean,
      default: false,
    },
    formSubmit: { type: Function, default: () => {} },
  },
};
</script>
