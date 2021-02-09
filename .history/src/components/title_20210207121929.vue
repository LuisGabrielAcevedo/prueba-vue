<template>
  <div class="title">
    {{text}}
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
  },
}
</script>

<style lang="scss">
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
</style>
