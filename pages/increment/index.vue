<template>
  <div>
    <title-stisla title="Increment" />
    <skeleton>
      <div class="text-right">
        <button class="btn btn-secondary" type="button" @click="min"><i class="fas fa-minus"></i> Decrement</button>
        <button class="btn btn-primary" type="button" @click="add"><i class="fas fa-plus"></i> Increment</button>
      </div>
      <div class="d-flex justify-content-center h-100">
        <div class="d-flex align-items-center ">
          <h1>{{myIncrement}}</h1>
        </div>
      </div>
    </skeleton>
  </div>
</template>
<script>
import skeleton from "@/components/partials/skeleton.vue";
export default {
  components: { skeleton },
  layout: "admin",
  asyncData() {
    return {
      increment: 0,
    };
  },
  computed: {
    myIncrement() {
      if (this.increment == 3) return "Terlalu banyak Increment ya bund";
      return this.increment;
    },
  },
  methods: {
    add() {
      if (this.increment < 3) this.increment++;
    },
    min() {
      if (this.increment > 0) this.increment--;
    },
  },
};
</script>