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
          maxlength="10"
          :error="error"
        />
        <div class="enterCode__buttons-container">
          <div class="enterCode__recaptcha">
          <vue-recaptcha
            sitekey="6LeepLgZAAAAAOEFbUH1LNlh-gpy4OfKV4zTIuoK"
            :loadRecaptchaScript="true"
            @verify="verifyRecaptcha"
            @expired="expiredRecaptcha"
            size="100px"
            language="es"
            ref="recaptcha"
          ></vue-recaptcha>
          </div>
          <div class="enterCode__button">
            <Button text="ENVIAR" @handle-click="send()"/>
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
      <div class="enterCode__mobile-content">
      <img
        class="enterCode__image4"
        src="@/assets/web/tazos2.png"
      />
      <div class="enterCode__mobile-content2">
        <div style="width: 140px; margin-right: 20px;">
          <Input
          field="id"
          :model="id"
          @handle-input="setValue($event)"
          placeholder="Escribe aquí tu código"
          maxlength="10"
          :error="error"
        />
        </div>
        <div style="margin-top: 1px">
          <Button text="ENVIAR" @handle-click="send()"/>
        </div>
      </div>
      <div class="enterCode__mobile-recaptcha">
          <vue-recaptcha
            sitekey="6LeepLgZAAAAAOEFbUH1LNlh-gpy4OfKV4zTIuoK"
            :loadRecaptchaScript="true"
            @verify="verifyRecaptcha"
            @expired="expiredRecaptcha"
            size="100px"
            language="es"
            ref="recaptcha"
          ></vue-recaptcha>
          </div>
      </div>
      <img
      v-if="mobile"
      class="enterCode__image3"
      src="@/assets/web/copa2.png"
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
      count: 0
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
      SaveCodes({
        code: this.id,
      })
        .then((respu) => {
           GetStatus().then(resp => {
            this.id = "";
            this.loading = false;
            this.$store.dispatch("setAlert", {
            showClose: true,
            type:'SUCCESS',
            title: respu.data.mensaje,
            message: resp.data,
          });
          })
        })
        .catch((err) => {
          this.id = "";
          this.loading = false;
          this.$store.dispatch("setAlert", {
            buttonLabel: "Aceptar",
            type:'INFO',
            showClose: true,
            message: err.response.data.message.mensaje || "",
          });
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
  &__title {
    height: 100px;
    @include mobile() {
      height: 50px;
      margin-bottom: 20px;
    }
  }
  &__image {
    margin-top: 10px;
    height: 836px;
    margin-left: -170px;
    margin-right: 100px;
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
  }
  &__image3 {
    height: 300px;
  }
  &__image4 {
    height: 80px;
    margin-left: -10px;
    margin-top: 10px;
  }
  &__mobile-content {
    width: 100%;
    margin-top: 30px;
    position: relative;
  }
  &__mobile-recaptcha {
    position: absolute;
    top: 0;
    right: -98px;
    transform: scale(0.4);
  }
  &__mobile-content2 {
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: -28px;
    right: 0;
  }
}
</style>
