<template>
  <div class="preview">
    <div class="preview__modal">
      <img
      class="preview__image"
      src="@/assets/web/preview-logo.png"
    />
        <span class="preview__title">¡MUY PRONTO</span>
        <span class="preview__title preview__title2">COMIENZA LA PROMO!</span>
        <span class="preview__text">Conserva tus tazos. Cuantos más códigos</span>
        <span class="preview__text">registres, más oportunidades tendrás de ganar.</span>
        <span class="preview__endMessage">FALTAN <span class="preview__number">02</span> DÍAS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',
}
</script>

<style lang="scss">
.preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__image{
    height: 100px;
    margin-bottom: 60px;
  }
  &__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-radius: 45px;
    padding: 20px 40px 60px 40px;
  }
  &__title {
    font-family: MontrealHeavy;
    color: #D62626;
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 60px;
  }
  &__title2 {
    margin-bottom: 60px;
  }
  &__endMessage {
    font-family: MontrealHeavy;
    color: #D62626;
    font-size: 50px;
    line-height: 50px;
    margin-top: 60px;
  }
  &__number {
    font-size: 70px;
    line-height: 50px;
  }
  &__text {
    font-family: MontrealBold;
    font-size: 20px;
  }
}
</style>
