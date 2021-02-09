<template>
  <div class="howToTakePart">
    <img
      class="howToTakePart__image"
      src="@/assets/web/titles/como-participar.png"
    />
  </div>
</template>

<script>
export default {
  name: 'HowToTakePart',
}
</script>

<style lang="scss">
.howToTakePart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  &__image {
    width: 553px;
    height: 114px;
  }
}
</style>
