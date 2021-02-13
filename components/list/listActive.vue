<template>
  <ul class="list-group list-group-flush mt-3">
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(item,i) in list" :key="i" style="padding: .75rem 0.25rem;">
      {{item}}
      <button class="btn btn-outline-danger rounded-pill" @click="remove(i,item)">
        <i class="fas fa-minus"></i>
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    for: {
      type: String,
      default: "pembaca",
    },
  },
  methods: {
    remove(index, name) {
      this.$swal({
        icon: "warning",
        title: "Apakah kamu yakin?",
        text: `menghapus data ${name} dari daftar ${this.for}`,
        showCancelButton: true,
      }).then(({ isDismissed }) => {
        if (!isDismissed) {
          const list = this.list.filter((item, i) => i != index);
          this.$emit("list", list);
        }
      });
    },
  },
};
</script>