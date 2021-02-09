<template>
  <div class="signIn">
    <div class="signIn__content">
      <span>¡ENCUENTRA EN LOS EMPAQUES DE MARGARITA LOS TAZOS CON LOS GOLAZOS ICÓNICOS DE LA UEFA CHAMPIONS LEAGUE Y PARTICIPA POR INCREIBLES PREMIOS!</span>
      <span></span>
      <span></span>
    <img
      class="signIn__image"
      src="@/assets/web/grupo.png"
     />
     <img
      class="signIn__start-image"
      src="@/assets/web/estrellas.png"
     />
     <span>¿YA ESTÁS REGISTRADO?</span>
    <div>
      <Button text="INGRESAR" @handle-click="signIn()"/>
    </div>
     <img
      class="signIn__start-image"
      src="@/assets/web/estrellas.png"
     />
     <span>AÚN NO ESTOY REGISTRADO</span>
    <div class="signIn__button-container">
      <Button text="REGÍSTRATE" @handle-click="register()"/>
    </div>
      <span>Promo válida únicamente para mayores de edad.</span>
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
    padding: 20px 100px 40px 100px;
  }
  &__image {
    height: 170px;
  }
}
</style>
