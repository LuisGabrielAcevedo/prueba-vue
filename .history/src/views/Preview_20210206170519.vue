<template>
  <div class="preview">
    <div class="preview__modal">
      <img
      class="preview__image"
      src="@/assets/web/preview-logo.png"
    />
        <span>¡MUY PRONTO COMIENZA LA PROMO!</span>
        <span>Conserva tus tazos. Cuantos más códigos</span>
        <span>registres, más oportunidades tendrás de ganar.</span>
        <span>FALTAN 02 DÍAS</span>
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
    opacity: 1;
  }
  &__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FBC702 0% 0% no-repeat padding-box;
    box-shadow: 7px 7px 7px #00000059;
    border-radius: 45px;
    opacity: 0.7;
    padding: 20px 40px 60px 40px;
  }
}
</style>
