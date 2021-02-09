<template>
  <div class="title">
    <div class="title__line"></div>
    <span>{{text}}</span>
    <div class="title__line"></div>
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
    &__line {
        width: 801px;
        height: 4px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }
}
</style>
