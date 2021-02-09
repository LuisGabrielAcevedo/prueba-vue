<template>
  <div class="preview">
    <div class="preview__modal">
      <img
      class="preview__image"
      src="@/assets/web/preview-logo.png"
    />
        <span class="preview__title">¡MUY PRONTO</span>
        <span class="preview__title">COMIENZA LA PROMO!</span>
        <span>Conserva tus tazos. Cuantos más códigos</span>
        <span>registres, más oportunidades tendrás de ganar.</span>
        <span class="preview__endMessage">FALTAN <span>02</span> DÍAS</span>
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
    margin-bottom: 20px;
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
  }
}
</style>
