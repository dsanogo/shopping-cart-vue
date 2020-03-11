<template>
  <transition-group
    name="fade"
    tag="div"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      v-cloak
      class="row d-flex mb-3 align-items-center"
      v-for="(item, index) in filteredProducts"
      :key="item.id"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$parent.$emit('add', item)">
          +
        </button>
      </div>
      <div class="col-4">
        <img :src="item.image" :alt="item.name" class="img-fluid d-block" />
      </div>

      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <Price :value="Number(item.price)" />
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./Price";

export default {
  name: "ProductList",
  components: {
    Price
  },
  props: {
    products: Array,
    maximum: Number
  },
  methods: {
    beforeEnter: el => {
      el.className = "d-none";
    },
    enter: el => {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: el => {
      const delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    }
  },
  computed: {
    filteredProducts: function() {
      return this.products.filter(product => product.price <= this.maximum);
    }
  }
};
</script>

<style></style>
