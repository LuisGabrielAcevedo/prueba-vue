<template>
  <div class="button" @>
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
  methods: {
    click() {
        this.$emit('handle-click')
    }
  }
}
</script>

<style lang="scss">
.button {
    background-color: #D72626;
    border: 2px solid white;
    border-radius: 25px;
    padding: 2px 36px;
    cursor: pointer;
    &__text {
      color:white;
      font-family: MontrealHeavy;
      font-size: 25px;
      line-height: 25px;
    }
}
</style>
