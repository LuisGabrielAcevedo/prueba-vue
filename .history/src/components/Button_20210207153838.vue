<template>
  <div class="button">
    Button
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
.button {
    background-color: #D72626;
}
</style>
