<template>
  <div class="signIn">
    <div class="signIn__content">
      <span v-if="!mobile" class="signIn__title">¡ENCUENTRA EN LOS EMPAQUES DE MARGARITA LOS TAZOS CON</span>
      <span v-if="!mobile" class="signIn__title">LOS <span class="signIn__red-title">GOLAZOS ICÓNICOS</span> DE LA UEFA CHAMPIONS LEAGUE Y</span>
      <span v-if="!mobile" class="signIn__title">PARTICIPA POR INCREIBLES PREMIOS!</span>
      <span v-if="mobile" class="signIn__title">¡ENCUENTRA EN LOS EMPAQUES DE MARGARITA LOS TAZOS CON LOS <span class="signIn__red-title">GOLAZOS ICÓNICOS</span> DE LA UEFA CHAMPIONS LEAGUE Y PARTICIPA POR INCREIBLES PREMIOS!</span>
    <img
      class="signIn__image"
      src="@/assets/web/grupo.png"
     />
    <span class="signIn__signInTitle">¿YA ESTÁS REGISTRADO?</span>
    <div class="signIn__form">
      <div class="signIn__input">
         <Input
          field="phone"
          @handle-input="setValue($event)"
          placeholder="Número celular"
          :onlyNumbers="true"
          :error="error"
        />
      </div>
      <div class="signIn__btn">
        <Button text="INGRESAR" @handle-click="signIn()"/>
      </div>
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
    <div class="signIn__image1-content">
      <div class="signIn__image1-box-r"></div>
      <div class="signIn__image1-box-l"></div>
      <div class="signIn__image1-box-t"></div>
      <div class="signIn__image1-box-b"></div>
      <img
        v-if="mobile"
        class="signIn__image2"
        src="@/assets/mobile/fondo2.jpg"
      />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Input from '../components/Input'
import {Login} from '../api'

export default {
  name: 'SignIn',
  components: {
    Button,
    Input
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
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
    register() {
      this.goTo('/registrarse')
    },
    signIn() {
      if (this.phone) {
        if (!this.error) {
          this.loading = true;
          Login(this.phone)
            .then((resp) => {
              this.loading = false;
              this.$store.dispatch("setToken", resp.token);
              this.$store.dispatch("setUser", resp.user);
              this.goTo("/ingresar-codigo");
            })
            .catch((err) => {
              console.log(err)
              this.loading = false;
              this.$store.dispatch("setAlert", {
                buttonLabel: "Aceptar",
                showClose: true,
                type:'INFO',
                message: "¡El número ingresado no se encuentra registrado!.",
              });
            });
        }
      } else {
        this.$store.dispatch("setAlert", {
          buttonLabel: "Aceptar",
          type:'INFO',
          showClose: true,
          message: "¡Ingresa un número de teléfono válido!.",
        });
      }
    },
    setValue(e) {
      this.phone = e.value;
      this.validate();
    },
    validate() {
      if (this.phone) this.phone = this.phone.trim();
      const idReq = /^(300|301|302|304|305|310|311|312|313|314|315|316|317|318|319|320|321|322|323|324|350|351){1}[0-9]{1}[0-9]{6}$/;
      this.error =
        this.phone && !idReq.test(this.phone)
          ? "Ingresa un número de teléfono válido."
          : "";
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.signIn {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
  position: relative;
  @include mobile() {
    padding: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 40px;
    @include tablet() {
      padding: 20px;
    }
    @include mobile() {
      top: 0;
      padding: 10px 4px;
      background-color: transparent;
      width: 100%;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      box-shadow: none;
      position: absolute;
      z-index: 2;
    }
  }
  &__image {
    height: 130px;
    @include mobile() {
      height: 80px;
    }
  }
  &__title {
    font-family: MontrealHeavy;
    font-size: 15px;
    line-height: 20px;
    @include mobile() {
      font-family: MontrealHeavy;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
    }
  }
  &__red-title {
    color: #D52626;
  }
  &__start-image-2 {
    height: 24px;
    margin-top: -20px;
    @include mobile() {
      height: 20px;
      margin-top: -20px;
    }
  }
  &__signInTitle {
    font-family: MontrealHeavy;
    font-size: 22px;
    margin: 12px 0;
    @include mobile() {
      font-size: 16px;
      margin: 10px 0 20px 0;
    }
  }
  &__button-container {
    margin-bottom: 6px;
  }
  &__endMessage {
    font-family: MontrealBold;
    font-size: 12px;
    @include mobile() {
      font-size: 10px;
    }
  }
  &__signUnTitle {
    font-family: MontrealHeavy;
    font-size: 16px;
    margin: 6px 0;
    @include mobile() {
      font-size: 16px;
    }
  }
  &__form {
    display: flex;
    align-items: center;
    @include mobile() {
      margin-top: -16px;
    }
  }
  &__input {
    margin-right: 10px;
  }
  &__btn {
    margin-bottom: 36px;
  }
  &__image2 {
    height: calc(100vh - 74px);
    @media only screen and(max-height: 600px) {
      height: 600px;
    }
  }
  &__image1-content {
    position: relative;
    @include mobile() {
      margin: 0 auto;
    }
  }
  &__image1-box-r {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(-90deg, rgba(251,199, 2), transparent 10%);
  }
  &__image1-box-l {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(-270deg, rgba(251,199, 2), transparent 10%);
  }
  &__image1-box-t {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(251,199, 2), transparent 10%);
  }
  &__image1-box-b {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(0, rgba(251,199, 2), transparent 10%);
  }
}
</style>
