<template>
  <div class="title">
    Title
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: ''
    },
    data: {}
  },
}
</script>

<style lang="scss">
.title {}
</style>
