<template>
  <div class="signIn">
    <div class="signIn__content">
    <img
      class="signIn__image"
      src="@/assets/web/grupo.png"
     />
     <img
      class="signIn__start-image"
      src="@/assets/web/estrellas.png"
     />
     <span>¿YA ESTÁS REGISTRADO?</span>
     <img
      class="signIn__start-image"
      src="@/assets/web/estrellas.png"
     />
    </div>
    <span>AÚN NO ESTOY REGISTRADO</span>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
}
</script>

<style lang="scss">
.signIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 100px 40px 100px;
  }
  &__image {
    height: 170px;
  }
}
</style>
