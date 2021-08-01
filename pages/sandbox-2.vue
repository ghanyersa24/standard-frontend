<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center vw-100">
      <skeleton>
        <div v-if="code!=='yok-sandbox-2'" class="d-flex justify-content-center h-100">
          <div class="d-flex align-items-center ">
            <input type="text" class="form-control rounded-pill" v-model="code" placeholder="Kode">
          </div>
        </div>
        <div v-else>
          <div class="text-center">
            <h1 class="mb-5">SANDBOX FRONTEND 2</h1>
          </div>
          <div class="row">

            <div class="col-md-4 offset-md-4">
              <input-text @value="addNote" placeholder="note" />
              <hr>
              <p>todolist :</p>
              <todolist v-for="(item,i) in unchecklist" :key="'un'+i" :item="item" @check="checktext" @delete="deleteNote"  />
              <br>
              <p>list done :</p>
              <todolist v-for="(item,i) in checkedlist" :key="i" :item="item" @check="checktext" @delete="deleteNote" />
            </div>
          </div>
        </div>
      </skeleton>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
    };
  },
  computed: {
    unchecklist() {
      return this.$store.getters["todolist/unchecklist"];
    },
    checkedlist() {
      return this.$store.getters["todolist/checkedlist"];
    },
  },
  methods: {
    addNote(val) {
      this.$store.dispatch("todolist/ADD", val);
    },
    checktext(val) {
      this.$store.dispatch("todolist/CHECK", val);
    },
    deleteNote(val) {
      this.$store.dispatch("todolist/DELETE", val);
    },
  },
};
</script>