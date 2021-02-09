<template>
  <div class="howToTakePart">
    <img
      class="howToTakePart__image"
      src="@/assets/web/titles/como-participar.png"
    />
    <img
      v-if="!mobile"
      class="howToTakePart__image2"
      src="@/assets/web/como-participar.png"
    />
    <img
      v-if="mobile"
      class="howToTakePart__image2"
      src="@/assets/mobile/como-participar.png"
    />
  </div>
</template>

<script>
export default {
  name: 'HowToTakePart',
    computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.howToTakePart {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  &__image {
    width: 500px;
    @include mobile() {}
  }
  &__image2 {
    margin-top: 20px;
    height: 600px;
  }
}
</style>
