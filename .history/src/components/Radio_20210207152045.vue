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
    height: 28px;
    width: 28px;
    border-radius: 50%;
    border: 1px solid #D72626;
}
</style>
