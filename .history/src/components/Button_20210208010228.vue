<template>
  <div class="button" @click="click()">
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
    padding: 3px 30px;
    cursor: pointer;
    &__text {
      color:white;
      font-family: MontrealHeavy;
      font-size: 22px;
      line-height: 22px;
    }
}
</style>
