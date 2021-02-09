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
      type: Boolean,
      default: true
    },
  },
}
</script>

<style lang="scss">
.button {}
</style>
