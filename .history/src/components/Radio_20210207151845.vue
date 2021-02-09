<template>
  <div class="radio">
    
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
.radio {}
</style>
