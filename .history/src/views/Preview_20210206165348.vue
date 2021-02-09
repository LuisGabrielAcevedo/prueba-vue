<template>
  <div class="preview">
    <div class="preview__modal">
        <span>¡MUY PRONTO COMIENZA LA PROMO!</span>
        <span>Conserva tus tazos. Cuantos más códigos registres, más oportunidades tendrás de ganar.</span>
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
  &__modal {
      display: flex;
  flex-direction: column;
  }
}
</style>
