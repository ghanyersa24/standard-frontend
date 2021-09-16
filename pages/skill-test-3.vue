<template>
  <div class="d-flex justify-content-center vh-100">
    <div class="d-flex align-items-center vw-100">
      <skeleton>
        <div v-if="code!=='yakin-mau-test'" class="d-flex justify-content-center h-100">
          <div class="d-flex align-items-center ">
            <input type="text" class="form-control rounded-pill" v-model="code" placeholder="Kode">
          </div>
        </div>
        <div v-else class="container">
          <div class="text-center">
            <h1 class="mb-5">SKILL TEST FRONTEND</h1>
          </div>
          <div class="row">
            <div class="col-md-4">
              <h6>PROGRAMMER</h6>
              <item-list v-for="(item) in leftList" :key="item.key" :index="item.key" :checked="item.checked" :name="item.name" @check="(val)=>{checkLeft(val)}" />
            </div>
            <div class="col-md-3 text-center">
              <br><br>
              <button class="btn btn-outline-primary w-50" @click="moveToRight">KANAN</button>
              <button class="btn btn-outline-primary w-50" @click="moveToLeft">KIRI</button>
            </div>
            <div class="col-md-4">
              <h6>ANALYST</h6>
              <item-list v-for="(item) in rightList" :key="item.key" :index="item.key" :checked="item.checked" :name="item.name" @check="(val)=>{checkRight(val)}" />
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
      list: this.$store.state.skillTest.list.map((item, i) => {
        item.key = i;
        return item;
      }),
      changeRight: [],
      changeLeft: [],
    };
  },
  computed: {
    leftList() {
      return this.list.filter((item) => {
        if (item.position == "left") {
          return item;
        }
      });
    },
    rightList() {
      return this.list.filter((item) => {
        if (item.position == "right") return item;
      });
    },
  },
  mounted() {},
  methods: {
    doDelete() {
      const request = this.requestDelete("lalala", this.inputan);
      
    },
    checkLeft(index) {
      console.log(index);
      if (this.changeLeft.includes(index)) {
        this.changeLeft = this.changeLeft.filter((item) => item !== index);
      } else {
        this.changeLeft.push(index);
      }
    },
    checkRight(index) {
      if (this.changeRight.includes(index)) {
        this.changeRight = this.changeRight.filter((item) => item !== index);
      } else {
        this.changeRight.push(index);
      }
    },
    moveToRight() {
      this.changeLeft.map((item) => {
        this.$store.commit("skillTest/MOVE_NAME", {
          index: item,
          position: "right",
        });
      });
      this.changeLeft = [];
    },
    moveToLeft() {
      this.changeRight.map((item) => {
        this.$store.commit("skillTest/MOVE_NAME", {
          index: item,
          position: "left",
        });
      });
      this.changeRight = [];
    },
  },
  // table A = nama kode
  // UNION ALL
  // table B = nama kode
};
</script>