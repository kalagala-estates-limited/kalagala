import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueKonva from "vue-konva";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

//importing bootstrap 5
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

library.add(faCircle, faEnvelope, faPhone, faFacebookF, faTwitter, faInstagram);

Vue.component("fa", FontAwesomeIcon);
Vue.use(VueKonva);
Vue.config.productionTip = false;

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
