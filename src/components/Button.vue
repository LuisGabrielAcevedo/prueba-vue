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
    border-radius: 25px;
    padding: 6px 12px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &__text {
      color:white;
      font-family: MontrealHeavy;
      font-size: 18px;
      line-height: 18px;
    }
}
</style>
