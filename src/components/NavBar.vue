<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="nav-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$parent.$emit('toggleSlider')"
      >
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ml-2" v-if="cart.length > 0">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          id="cartDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span class="badge badge-pill badge-light">{{ cartQty }}</span>
          <font-awesome-icon
            icon="shopping-cart"
            class="mx-2"
          ></font-awesome-icon>
          <Price :value="Number(cartTotal)" />
        </button>

        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="cartDropdown"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span
                class="badge badge-pill badge-warning align-text-top mr-1"
                >{{ item.qty }}</span
              >
              {{ item.product.name }}
              <b>
                <Price :value="Number(item.qty * item.product.price)" />
              </b>
              <a
                href="#"
                @click.stop="$parent.$emit('deleteItem', index)"
                class="badge badge-danger text-white"
                >-</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price";

export default {
  name: "NavBar",
  props: {
    cart: Array,
    cartQty: Number,
    cartTotal: Number
  },
  components: {
    Price
  }
};
</script>

<style></style>
