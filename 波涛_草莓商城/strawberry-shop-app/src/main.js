import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

Vue.filter("dalImg", (val) => {
  if (val && val.startsWith("http")) {
    return val;
  }
  return `http://localhost:3009${val}`;
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
