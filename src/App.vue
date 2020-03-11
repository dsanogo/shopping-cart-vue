<template>
  <div id="app" class="container mt-5">
    <router-view
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      :brandName="brandName"
      :products="products"
      :maximum.sync="maximum"
      :sliderStatus="sliderStatus"
      @add="addItem"
      @deleteItem="deleteItem"
      @toggleSlider="toggleSliderStatus"
    >
    </router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      products: [],
      maximum: 99,
      sliderStatus: true,
      cart: [],
      brandName: "SmartI'M"
    };
  },
  methods: {
    addItem: function(product) {
      let productIndex = this.cart.findIndex(cartItem => {
        return cartItem.product.id == product.id;
      });

      if (productIndex !== -1) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product, qty: 1 });
      }
    },
    deleteItem: function(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
    toggleSliderStatus: function() {
      this.sliderStatus = !this.sliderStatus;
    }
  },
  mounted() {
    const productsUrl = "https://hplussport.com/api/products/order/price";

    axios
      .get(productsUrl)
      .then(res => (this.products = res.data))
      .catch(err => console.error(err));
  },
  computed: {
    minValue: function() {
      const productPrices = this.products.map(product => {
        return product.price;
      });
      return Math.min(...productPrices);
    },
    cartQty: function() {
      let qty = 0;
      for (let key in this.cart) {
        qty += this.cart[key].qty;
      }
      return qty;
    },
    cartTotal: function() {
      let sum = 0;
      for (let key in this.cart) {
        sum += this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

[v-cloak] {
  display: none;
}
</style>
