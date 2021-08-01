<template>
  <div>
    <div class="form-group row">
      <div class="col-sm-8">
        <input type="checkbox" :checked="item.checked" class="form-check-input" :id="idName" @click="check">
        <label :class="'form-check-label'+item.checked?' text-muted':''" :for="idName">{{item.note}}</label>
      </div>
      <div class="col-sm-4 text-right">
        <i class="fas fa-trash" @click="del"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({ checked: false, note: "" }),
    },
  },
  computed: {
    idName() {
      return "id" + this.item.note.replace(/ /g, "");
    },
  },
  methods: {
    check() {
      this.$emit("check", this.item.note);
    },
    del() {
      this.$emit("delete", this.item.note);
    },
  },
};
</script>