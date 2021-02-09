<template>
  <div class="button">
    <span class="button__text">{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
.button {
    background-color: #D72626;
    border: 2px solid white;
    border-radius: ;
    &__text {
      color:white;
      font-family: MontrealHeavy;
      font-size: 25px;
    }
}
</style>
