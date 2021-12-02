import "core-js/stable";
import "regenerator-runtime/runtime";

import mount from "./mount.js";
import Vue from "vue";
import router from "../router/index.js";
import vuetify from "../plugins/vuetify.js";
import App from "../vue/App.vue";

document.body.appendChild(mount());

const app = new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount(".app-root");
