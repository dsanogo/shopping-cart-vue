<template>
  <span>
    {{ prefix + Number.parseFloat(value * conversion).toFixed(precision) }}
  </span>
</template>

<script>
export default {
  name: "Price",
  props: {
    value: Number,
    prefix: {
      type: String,
      default: "$"
    },
    precision: {
      type: Number,
      default: 2
    },
    conversion: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style scoped></style>
