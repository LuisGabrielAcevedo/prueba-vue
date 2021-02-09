<template>
  <div class="enterCode">
     <img
      class="enterCode__image"
      src="@/assets/web/copa.png"
     />
     <div class="enterCode__content">
       <Title text="BIENVENIDO"/>
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
          <div class="g-recaptcha">
            <vue-recaptcha
            sitekey="6LeepLgZAAAAAOEFbUH1LNlh-gpy4OfKV4zTIuoK"
            :loadRecaptchaScript="true"
            @verify="verifyRecaptcha"
            @expired="expiredRecaptcha"
            size="100px"
            language="es"
          ></vue-recaptcha>
          </div>
          <Button text="ENVIAR" @handle-click="send()"/>
        </div>
      </div>
      <img
        class="enterCode__image2"
        src="@/assets/web/tazos.png"
      />
     </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import VueRecaptcha from "vue-recaptcha";

export default {
  name: 'EnterCode',
  data() {
    return {
      loading: false,
      id: "",
      error: "",
      recaptchaCode: null,
    };
  },
  components: {
    Title,
    Input,
    Button,
    VueRecaptcha
  },
  methods: {
    send() {
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
        .then((resp) => {
          this.loading = false;
          this.$store.dispatch("setAlert", {
            buttonLabel: "Enviar",
            message: resp.data.mensaje,
          });
          this.$store.dispatch("loadBalance");
          this.getUserStatus();
          this.id = "";
        })
        .catch((err) => {
          this.loading = false;
          this.id = "";
          this.$store.dispatch("setAlert", {
            buttonLabel: "Aceptar",
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
  }
}
</script>

<style lang="scss">
.enterCode {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  &__image {
    margin-top: 10px;
    height: 550px;
  }
  &__image2 {
     margin-top: 100px;
     height: 250px;
  }
  &__content {
    display: flex;
    width: 380px;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 20px 10px 20px;
    position: relative;
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
    font-size: 22px;
    margin-bottom: 10px;
  }
  &__buttons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
  }
}
</style>
