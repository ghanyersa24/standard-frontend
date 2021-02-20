<template>
  <div>
    <div class="d-flex justify-content-center vh-100">
      <div class="d-flex align-items-center">
        <div class="card rounded p-5">
          <div class="text-center">
            <h2>Login User</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="actionLogin">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input v-model="login.email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  created() {
    if (this.$auth.loggedIn) this.$router.push("/");
  },
  methods: {
    async actionLogin() {
      try {
        let { data } = await this.$auth.loginWith("local", {
          data: this.login,
        });
        localStorage.setItem("name", data.data.name);
        localStorage.setItem("x-auth-token", data.data.token);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>