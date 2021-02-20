<script>
export default {
  data() {
    return {
      mixinsTitle: "title dari mixins",
    };
  },
  methods: {
    async requestGet(endpoint, params) {
      const req = await this.$axios({ method: "GET", url: endpoint, params });
      if (!req.data.success) {
        this.$swal({ icon: "error", title: "Gagal!", text: req.data.message });
      }
      return req.data;
    },
    async requestDelete(endpoint, payload) {
      return await this.$axios({
        method: "DELETE",
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
    async konfirm(message) {
      return this.$swal({
        title: "Apakah kamu yakin",
        text: message,
        icon: "warning",
        showCancelButton: true,
      });
    },
  },
};
</script>