<template>
  <div class="howToTakePart">
    <img
    v-if="login"
      class="app__image"
      src="@/assets/web/fondo-ingresar.jpg"
    />
  </div>
</template>

<script>
export default {
  name: 'HowToTakePart',
}
</script>

<style lang="scss">
.howToTakePart {}
</style>
