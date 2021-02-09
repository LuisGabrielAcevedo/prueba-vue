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
      default: true
    },
  },
}
</script>

<style lang="scss">
.button {}
</style>
