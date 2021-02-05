<template>
  <div>
    <title-stisla :title="inputEmail" />
    <div class="row">
      <input-text val="ghany ersa" name="username" add-class="col-3" />
      <input-text val="Depok 1" name="address" add-class="col3" />
      <input-text val="082164xxxxx" name="phone" type="email" add-class="col-6" />

      <div class="col-12">
        <label for="inputEmail">Email address</label>
        <input id="inputEmail" v-model="inputEmail" type="email" class="form-control" placeholder="name@example.com">
        <p>{{ inputEmail }}</p>
      </div>

      <div class="col-12">
        <label for="inputEmail">Description</label>
        <textarea v-model="description" class="form-control" name="description" cols="30" rows="10" />
        <p>{{ description }}</p>
      </div>

      <div class="col-12">
        <label for="inputSelect">Faculty </label>
        <select id="inputSelect" v-model="inputSelect" class="form-control">
          <option value="Ilmu Komputer">
            Ilmu Komputer
          </option>
          <option value="Ilmu Administrasi">
            Ilmu Administrasi
          </option>
          <option value="Ekonomi dan Bisnis">
            Ekonomi dan Bisnis
          </option>
        </select>
        <p>{{ inputSelect }}</p>
      </div>

      <div class="col-12">
        <label for="inputSelect">Faculty </label>
        <select id="inputSelect" v-model="inputSelectVFor" class="form-control">
          <option v-for="(item,index) in faculty" :key="index" :value="item">
            {{ index+"---"+item }}
          </option>
        </select>
        <p>{{ inputSelectVFor }}</p>
      </div>

      <div class="col-12">
        <label for="inputSelect">university </label>
        <select id="inputSelect" v-model="inputUniversity" class="form-control">
          <option value="kerja">
            Bekerja
          </option>
          <option v-for="univ in university" :key="univ.id" :value="univ.id">
            {{ univ.name }}
          </option>
        </select>
        <p>{{ inputUniversity }}</p>
      </div>

      <div class="col-6">
        <h4 v-if="inputUniversity==3">
          Hore aku kuliah di UI
        </h4>
        <h4 v-else-if="inputUniversity==0">
          Kuliahku di bandung loh
        </h4>
        <h4 v-else-if="inputUniversity==5">
          Wah aku di Bakrie
        </h4>
        <h4 v-else-if="inputUniversity==4">
          Anak binus banget nih
        </h4>
        <h4 v-else>
          AKU MUNGKIN LAGI KERJA
        </h4>
      </div>
      <div class="col-6">
        <h4 v-show="inputUniversity==3">
          Hore aku kuliah di UI
        </h4>
        <h4 v-show="inputUniversity==0">
          Kuliahku di bandung loh
        </h4>
        <h4 v-show="inputUniversity==5">
          Wah aku di Bakrie
        </h4>
        <h4 v-show="inputUniversity==4">
          Anak binus banget nih
        </h4>
        <h4 v-show="inputUniversity=='kerja'">
          AKU MUNGKIN LAGI KERJA
        </h4>
      </div>
      <div class="d-flex justify-content-center vh-100">
        <div class="d-flex align-items-center">
          {{ title }} <br> {{ student.name }} <br>{{ faculty[0] }} <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inputText from "../components/form/inputText.vue";
export default {
  components: { inputText },
  layout: "admin",
  asyncData() {
    return {
      title: "TITLE ADMIN",
      description: "lorem ipsum dolor amit",
      student: {
        name: "Ghany Abdillah Ersa",
        faculty: "Ilmu Komputer",
      },
    };
  },
  data() {
    return {
      inputSelect: "Ilmu Administrasi",
      inputSelectVFor: "Ilmu Administrasi",
      inputUniversity: 3,
      inputEmail: "",
      faculty: ["Ilmu Komputer", "Ilmu Administrasi", "Ekonomi dan Bisnis"],
      university: [
        { id: 0, name: "ITB" },
        { id: 3, name: "UI" },
        { id: 4, name: "Binus" },
        { id: 5, name: "Bakrie" },
      ],
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
