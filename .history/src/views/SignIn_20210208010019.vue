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
     <span class="signIn__signInTitle">¿YA ESTÁS REGISTRADO?</span>
    <div class="signIn__form">
       <Input
          field="phone"
          @handle-input="setValue($event)"
          placeholder="Número celular"
          :onlyNumbers="true"
          :error="error"
        />
      <Button text="INGRESAR" @handle-click="signIn()"/>
    </div>
     <img
      class="signIn__start-image-2"
      src="@/assets/web/estrellas.png"
     />
     <span class="signIn__signUnTitle">AÚN NO ESTOY REGISTRADO</span>
    <div class="signIn__button-container">
      <Button text="REGÍSTRATE" @handle-click="register()"/>
    </div>
    <span class="signIn__endMessage">Promo válida únicamente para mayores de edad.</span>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Input from '../components/Input'

export default {
  name: 'SignIn',
  components: {
    Button,
    Input
  },
  data() {
    return {
      loading: false,
      phone: "",
      error: "",
    };
  },
  methods: {

<template>
  <div class="login a-center">
    <div class="login__first-section">
      <img class="login__image-1" src="@/assets/images/web/titulo.png" />
      <img class="login__image-2" src="@/assets/images/web/Logo Recargatón.png" />
    </div>
    <div class="login__second-section">
      <div class="login__inputContent">
        <div class="login__item label-yellow">Si ya estas registrado inicia sesión aquí</div>
        <Input
          class="m-top login__input-celular"
          field="phone"
          @handle-input="setValue($event)"
          placeholder="Número de celular"
          :onlyNumbers="true"
          :error="error"
        />
        <b-button @click="submit()" class="button-primary login__button-spacing">INGRESAR</b-button>
      </div>
      <div class="login__separator">
        <div class="label-white login__item mt-3">¿Aún no estas participando con nosotros?</div>
        <div class="label-yellow login__item mt-1">¡Regístrate Ahora!</div>
        <b-button
          class="button-yellow login__button-spacing"
          @click="goTo('registrarse')"
        >REGÍSTRARME</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from "@/api";
import Input from "../components/Input";
export default {
  name: "Login",
  components: {
    Input,
  },
  data() {
    return {
      loading: false,
      phone: "",
      error: "",
    };
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== `/${path}`) this.$router.push(path);
    },
    register() {},
    signIn() {},
    setValue(e) {
      this.phone = e.value;
      this.validate();
    },
    validate() {
      if (this.phone) this.phone = this.phone.trim();
      const idReq = /^([1-9]{1}[0-9]{6,9})$/;
      this.error =
        this.phone && !idReq.test(this.phone)
          ? "Ingresa un número de teléfono válido."
          : "";
    },
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
  &__start-image {
    height: 26px;
  }
  &__start-image-2 {
    height: 26px;
  }
  &__signInTitle {
    font-family: MontrealHeavy;
    font-size: 30px;
    margin: 20px 0;
  }
  &__button-container {
    margin-bottom: 6px;
  }
  &__endMessage {
    font-family: MontrealBold;
    font-size: 14px
  }
  &__signUnTitle {
    font-family: MontrealHeavy;
    font-size: 22px;
    margin: 6px 0;
  }
  &__form {
    display: flex;
  }
}
</style>
