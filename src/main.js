import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
  faShoppingCart,
  faDollarSign,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faShoppingBasket);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
