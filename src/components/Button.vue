<template>
  <div 
    class="button" 
    @click="click()" 
    :style="{
      'background-color': color,
      'padding': `${paddingHorizontal}px ${paddingVertical}px`
    }"
  >
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
    paddingVertical: {
      type: String,
      default: '12'
    },
    paddingHorizontal: {
      type: String,
      default: '6'
    },
    color: {
      type: String,
      default: '#D72626'
    }, 
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click() {
     if (!this.isLoading) {
      this.$emit('handle-click')
     }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.button {
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 6px 12px;
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
