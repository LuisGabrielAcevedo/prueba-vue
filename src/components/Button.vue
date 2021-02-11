<template>
  <div class="button" @click="click()" :style="{'background-color': color}">
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
    color: {
      type: String,
      default: '#D72626'
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
@import "@/assets/scss/mixins.scss";
.button {
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
      @include mobile() {
         font-size: 16px;
         line-height: 16px;
      }
    }
}
</style>
