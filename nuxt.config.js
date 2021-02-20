export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    title: "my-project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "my project init" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.datatables.net/1.10.22/css/dataTables.bootstrap4.min.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.datatables.net/1.10.23/css/jquery.dataTables.min.css",
      },
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.7.6/jquery.nicescroll.min.js",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
      },
      { src: "https://cdn.datatables.net/1.10.23/js/jquery.dataTables.min.js" },
      {
        src:
          "https://cdn.datatables.net/1.10.22/js/dataTables.bootstrap4.min.js",
      },
      { src: "js/stisla.js" },
      { src: "js/scripts.js" },
      { src: "js/custom.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/style.css",
    "@/assets/css/components.css",
    "@/assets/css/custom.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "vue-sweetalert2/nuxt",
    "@nuxtjs/auth",
  ],

  auth: {
    strategies: {
      local: {
        user: false,
        endpoints: {
          login: {
            url: "http://service.shiftacademy.id/ci/account/login",
            method: "post",
            propertyName: "data.token",
          },
          logout: false,
          user: false,
        },
        tokenRequired: true,
        tokenType: "",
        tokenName: "x-auth-token",
      },
    },
  },
  router: {
    middleware: ["auth"],
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://lit-basin-75259.herokuapp.com/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  server: {
    port: 8000,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
