<template>
  <div class="button">
    Button
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss">
.button {}
</style>
