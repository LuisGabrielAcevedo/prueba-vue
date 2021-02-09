<template>
  <div class="title">
    Title
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {}
  },
}
</script>

<style lang="scss">
.title {}
</style>
