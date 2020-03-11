<template>
  <transition name="fade">
    <div v-if="sliderStatus">
      <div class="align-items-center" :class="sliderState">
        <label for="formMax" class="font-weight-bold mr-2">max</label>
        <input
          type="text"
          id="formMax"
          class="form-control mx-2 text-center w-25"
          v-model="maxAmount"
          @change="$parent.$emit('update:maximum', maxAmount)"
        />
        <input
          type="range"
          min="0"
          max="200"
          class="custom-range"
          v-model="maxAmount"
          @input="$parent.$emit('update:maximum', maxAmount)"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PriceSlider",
  data() {
    return {
      maxAmount: 99
    };
  },
  components: {},
  props: {
    sliderStatus: Boolean
  },
  computed: {
    sliderState: function() {
      return this.sliderStatus ? "d-flex" : "d-none";
    }
  }
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>
