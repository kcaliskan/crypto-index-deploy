import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import "bootstrap";

new Vue({
  router,
  store,
  render: (h) => h(App),
  el: "#app",
});
