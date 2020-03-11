import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";

import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);

import Products from "./components/Products";
import Checkout from "./components/Checkout";

import {
  faShoppingCart,
  faDollarSign,
  faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faDollarSign, faShoppingBasket);

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/checkout",
      component: Checkout
    },
    {
      path: "*",
      component: Products
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
