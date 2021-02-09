<template>
  <div class="radio">
    <div class="radio__value">

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
    &__value {
        background-color: white;
    height: 18px;
    width: 18px;
    border-radius: 50%;} 
}
</style>
