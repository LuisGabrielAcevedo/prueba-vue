<template>
  <div class="enterCode">
     <img
      v-if="!mobile"
      class="enterCode__image"
      src="@/assets/web/copa.png"
     />
     <div class="enterCode__content" v-if="!mobile">
      <img
      class="enterCode__title"
      src="@/assets/web/titles/Titulo_Bienvenido.png"
      />
      <div class="enterCode__content2">
        <span class="enterCode__text">INGRESA EL CÓDIGO DE TU TAZO</span>
        <Input
          field="id"
          :model="id"
          @handle-input="setValue($event)"
          placeholder="Escribe aquí tu código"
          maxlength="8"
          :error="error"
        />
        <div class="enterCode__buttons-container">
          <div class="enterCode__recaptcha">
          <vue-recaptcha
            sitekey="6LdInk8aAAAAAMzuYk9TFDurd_Nfu8WcVRvgHrjG"
            :loadRecaptchaScript="true"
            @verify="verifyRecaptcha"
            @expired="expiredRecaptcha"
            size="100px"
            language="es"
            ref="recaptcha"
          ></vue-recaptcha>
          </div>
          <div class="enterCode__button">
            <Button text="ENVIAR" @handle-click="send()" :isLoading="loading"/>
          </div>
        </div>
      </div>
      <img
        class="enterCode__image2"
        src="@/assets/web/tazos.png"
      />
     </div>
     <div class="enterCode__content" v-if="mobile">
      <img
      class="enterCode__title"
      src="@/assets/web/titles/Titulo_Bienvenido.png"
     />
      <span class="enterCode__text">INGRESA EL CÓDIGO DE TU TAZO</span>
      <div style="width: 200px">
        <Input
        field="id"
        :model="id"
        @handle-input="setValue($event)"
        placeholder="Escribe aquí tu código"
        maxlength="8"
        :error="error"
      />
      </div>
      <div class="enterCode__mobile-recaptcha ">
        <vue-recaptcha
          sitekey="6LdInk8aAAAAAMzuYk9TFDurd_Nfu8WcVRvgHrjG"
          :loadRecaptchaScript="true"
          @verify="verifyRecaptcha"
          @expired="expiredRecaptcha"
          size="100px"
          language="es"
          ref="recaptcha"
        ></vue-recaptcha>
      </div>
       <div class="enterCode__button">
        <Button paddingVertical="50" paddingHorizontal="10" text="ENVIAR" @handle-click="send()"/>
       </div>
      <img
      v-if="mobile"
      class="enterCode__image"
      src="@/assets/web/copa.png"
     />
     </div>
  </div>
</template>

<script>
import Input from '../components/Input'
import Button from '../components/Button'
import VueRecaptcha from "vue-recaptcha";
import {SaveCodes, GetStatus} from '../api'

export default {
  name: 'EnterCode',
  data() {
    return {
      loading: false,
      id: "",
      error: "",
      recaptchaCode: null,
      count: 0, 
    };
  },
  components: {
    Input,
    Button,
    VueRecaptcha
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
  },
  methods: {
    send() {
      this.verifyCatptcha()
       if (this.id) {
        if (this.recaptchaCode) {
          this.save();
        } else {
          this.$store.dispatch("setAlert", {
          buttonLabel: "Aceptar",
          type:'INFO',
          showClose: true,
            message:
              "¡Para poder continuar, debes marcar la casilla de verificación (No soy un robot)!.",
          });
        }
      } else {
        this.$store.dispatch("setAlert", {
          buttonLabel: "Aceptar",
          type:'INFO',
          showClose: true,
          message: "¡Ingresa un código válido!.",
        });
      }
    }, 
    save() {
      this.loading = true;
      SaveCodes({
        code: this.id,
      })
        .then((respu) => {
           GetStatus().then(resp => {
            this.id = "";
            this.loading = false;
            this.$refs.recaptcha.reset()
            this.recaptchaCode = null;
            this.count = 0
            this.$store.dispatch("setAlert", {
            showClose: true,
            type:'SUCCESS',
            title: respu.data.mensaje,
            message: !respu.data.winner ? resp.data : '',
          });
          })
        })
        .catch((err) => {
          if (err.response.status !== 401) {
            this.id = "";
            this.loading = false;
            this.$store.dispatch("setAlert", {
            buttonLabel: "Aceptar",
            type:'INFO',
            showClose: true,
            message: err.response.data.message.mensaje || "",
          });
          }
        });
    },
    verifyRecaptcha(token) {
      this.recaptchaCode = token;
    },
    expiredRecaptcha() {
      this.recaptchaCode = null;
    },
    setValue(e) {
      this.id = e.value;
    },
    verifyCatptcha() {
      if (this.count === 3) {
        this.$refs.recaptcha.reset()
        this.recaptchaCode = null;
        this.count = 0
      } else {
        this.count = this.count + 1;
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.enterCode {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media only screen and(min-width: 600px) {
    overflow: hidden;
    height: 100%;
  }
  &__title {
    height: 90px;
    @include mobile() {
      height: 50px;
      margin-bottom: 10px;
    }
  }
  &__image {
    margin-top: 10px;
    height: 720px;
    margin-left: -170px;
    margin-right: 100px;
    @include tablet() {
      margin-right: 20px;
    }
    @include mobile() {
      height: 450px;
      margin-left: 0;
      margin-right: 120px;
    }
  }
  &__image2 {
    margin-top: 100px;
    height: 250px;
    margin-left: -64px;
  }
  &__content {
    display: flex;
    width: 380px;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 20px 10px 20px;
    position: relative;
    margin-bottom: 20px;
    @include mobile() {
      margin: 0 20px 20px 20px;
      padding: 20px 10px 10px 10px;
      overflow: hidden;
      max-width: 318px;
      max-height: 600px;
    }
  }
  &__content2 {
    position: absolute;
    bottom: 0;
    top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text{
    font-family: MontrealHeavy;
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
    @include mobile() {
      font-size: 12px;
    }
  }
  &__buttons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
  &__recaptcha {
    position: absolute;
    top: 78px;
    right: -59px;
    transform: scale(0.62);
  }
  &__button {
    margin-top: 50px;
    @include mobile() {
      margin-top: 8px;
    }
  }
  &__image4 {
    height: 80px;
    margin-left: -10px;
    margin-top: 10px;
    @include xs() {
      height: 60px;
    }
  }
  &__mobile-recaptcha {
    transform: scale(0.94);
    margin-top: -20px;
    @include xs() {
      transform: scale(0.8);
    }
  }
}
</style>
