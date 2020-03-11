<template>
  <div>
    <h1>{{ brandName + " Shop" }}</h1>
    <NavBar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" />
    <PriceSlider :maximum.sync="maximum" :sliderStatus="sliderStatus" />
    <ProductList :products="products" :maximum="Number(maximum)" />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import PriceSlider from "./PriceSlider";
import ProductList from "./ProductList";

export default {
  name: "Products",
  components: {
    NavBar,
    PriceSlider,
    ProductList
  },
  props: {
    cart: Array,
    products: Array,
    cartQty: Number,
    cartTotal: Number,
    maximum: Number,
    sliderStatus: Boolean,
    brandName: String
  }
};
</script>

<style></style>
