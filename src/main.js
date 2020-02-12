import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";

// Composition API must be declared before anything else
// https://github.com/vuejs/composition-api/#usage
Vue.use(VueCompositionApi);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "./styles/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
