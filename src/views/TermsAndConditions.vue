<template>
  <div class="termsAndConditions">
    <img
      class="termsAndConditions__title"
      src="@/assets/web/titles/Titulo_TyC.png"
    />
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditions'
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.termsAndConditions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  &__title {
    height: 90px;
    @include mobile() {
      height: 50px;
    }
  }
}
</style>
