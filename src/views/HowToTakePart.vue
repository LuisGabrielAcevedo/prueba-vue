<template>
  <div class="howToTakePart">
    <img
      class="howToTakePart__title"
      src="@/assets/web/titles/Titulo_Como_partic.png"
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
  padding-top: 10px;
  &__title {
    height: 80px;
    @include mobile() {
      height: 50px;
    }
  }
  &__image2 {
    margin-top: 20px;
    height: 380px;
    @include tablet () {
      height: 370px;
    }
    @include mobile() {
       height: 453px;
    }
  }
}
</style>
