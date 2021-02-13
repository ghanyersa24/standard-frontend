<template>
  <div>
    <title-stisla title="Tambah Student" />
    <skeleton>
      <form @submit.prevent="addUser">
        <input-text name="Nama Lengkap" :val="user.name" @value="(val)=>this.user.name=val" />
        <input-text name=" Address" :val="user.address" @value="(val)=>this.user.address=val" />
        <input-text name="No Telepon" type="number" :val="user.phone" @value="(val)=>this.user.phone=val" />
        <select-option-user :rows="gender" name="Jenis Kelamin" :val="user.gender" @value="(val)=>this.user.gender=val" />
        <div class="text-right">
          <nuxt-link class="btn btn-secondary mr-2" to="/student">Kembali</nuxt-link>
          <button class="btn btn-primary" type="submit">Simpan</button>
        </div>
      </form>
    </skeleton>
  </div>
</template>
<script>
import InputText from "../../components/form/inputText.vue";
import SelectOptionUser from "../../components/form/selectOptionUser.vue";
import skeleton from "../../components/partials/skeleton.vue";
export default {
  components: { skeleton, InputText, SelectOptionUser },
  layout: "admin",
  data() {
    return {
      gender: [
        { value: "M", label: "M" },
        { value: "F", label: "F" },
      ],
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