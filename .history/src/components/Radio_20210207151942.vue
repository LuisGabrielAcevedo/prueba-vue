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
  },
}
</script>

<style lang="scss">
.radio {
    background-color: white;
    height: 20px;
    width: 20px;
}
</style>
