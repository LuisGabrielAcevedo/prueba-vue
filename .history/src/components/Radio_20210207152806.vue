<template>
  <div class="radio" @click="click()">
    <div v-if="value" class="radio__value">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    value: {
      type: Boolean,
      default: true
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
.radio {
    background-color: white;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 1px solid #D72626;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    mar
    cursor: pointer;
    &__value {
        background-color: #D72626;
        height: 10px;
        width: 10px;
        border-radius: 50%;
    } 
}
</style>
