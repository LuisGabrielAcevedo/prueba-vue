<template>
  <div class="signIn">
    <div class="signIn__content">
      <span class="signIn__title">¡ENCUENTRA EN LOS EMPAQUES DE MARGARITA LOS TAZOS CON</span>
      <span class="signIn__title">LOS <span class="signIn__red-title">GOLAZOS ICÓNICOS</span> DE LA UEFA CHAMPIONS LEAGUE Y</span>
      <span class="signIn__title">PARTICIPA POR INCREIBLES PREMIOS!</span>
    <img
      class="signIn__image"
      src="@/assets/web/grupo.png"
     />
     <img
      class="signIn__start-image"
      src="@/assets/web/estrellas.png"
     />
     <span class="signIn__registerTitle">¿YA ESTÁS REGISTRADO?</span>
    <div>
      <Button text="INGRESAR" @handle-click="signIn()"/>
    </div>
     <img
      class="signIn__start-image-2"
      src="@/assets/web/estrellas.png"
     />
     <span>AÚN NO ESTOY REGISTRADO</span>
    <div class="signIn__button-container">
      <Button text="REGÍSTRATE" @handle-click="register()"/>
    </div>
    <span class="signIn__endMessage">Promo válida únicamente para mayores de edad.</span>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
export default {
  name: 'SignIn',
  components: {
    Button
  },
  methods: {
    register() {},
    signIn() {}
  }
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
    padding: 20px 40px 40px 40px;
  }
  &__image {
    height: 170px;
  }
  &__title {
    font-family: MontrealHeavy;
    font-size: 20px;
    line-height: 24px;
  }
  &__red-title {
    color: #D52626;
  }
  &__start-image {}
  &__start-image-2 {}
  &__registerTitle {
    font-family: MontrealHeavy;
    font-size: 30px
  }
  &__button-container {}
  &__endMessage {
    font-family: MontrealBold;
  }
}
</style>
