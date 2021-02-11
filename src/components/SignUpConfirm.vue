<template>
  <div class="signup-confirm">
    <div class="signup-confirm__close-container" @click="close()">
      <span class="signup-confirm__close">X</span>
    </div>
    <img 
      class="signup-confirm__info-image"
      src="@/assets/web/info.png"
     />
    <div class="signup-confirm__content">
      <span class="signup-confirm__text1" style="margin-bottom: 10px">
          Por favor confirma que tus datos estén correctos, especialmente tu número celular y operador al cual perteneces; recuerda que las recargas se realizarán a este número celular.
      </span>
      <span class="signup-confirm__text">Nombres: {{ user.firstName }}</span>
      <span class="signup-confirm__text">Apellidos: {{ user.lastName }}</span>
      <span class="signup-confirm__text">Cédula: {{ user.idn }}</span>
      <span class="signup-confirm__text">
        N° Celular: {{ user.phone }}
      </span>
      <span class="signup-confirm__text">
       Operador: {{ user.operator }}
      </span>
    </div>
    <div class="signup-confirm__buttons">
      <Button text="EDITAR DATOS" color="#A81A1A" @handle-click="close()"/>
      <Button text="ENVIAR" @handle-click="register()"/>
    </div>
  </div>
</template>

<script>
import { Register } from "@/api";
import Button from '../components/Button'
export default {
  name: "SignupConfirm",
  components: {
    Button
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
       return this.user.firstName + ' ' + this.user.lastName;
    }
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeSuccess(resp) {
      this.$emit("close-success", resp);
    },
    register() {
      Register({ ...this.user, adult_registration: 1, name: `${this.user.firstName} ${this.user.lastName}` })
        .then(resp => {
          this.loading = false;
          this.closeSuccess(resp);
          this.$store.dispatch("setAlert", {
            buttonLabel: "CONTINUAR",
            type:'SUCCESS',
            showClose: true,
            title: "¡TU REGISTRO HA SIDO EXITOSO!",
            message: "¡Ya puedes comenzar a ingresar códigos!."
          });
        })
        .catch(err => {
          this.loading = false;
          this.close();
          this.$store.dispatch("setAlert", {
            buttonLabel: "Aceptar",
            type:'INFO',
            showClose: true,
            messages: err.response.data.errors
          });
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.signup-confirm {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 300px;
  padding: 10px 20px;
  @include mobile() {
    padding: 10px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @include mobile() {
      overflow-y: auto;
      max-height: 300px;
    }
  }
  &__text1 {
      color: #D62626;
      font-family: MontrealBold;
      font-size: 16px;
      margin-bottom: 20px;
  }
  &__text {
    margin: 0 !important;
    font-family: MontrealBold;
    @include mobile() {
      font-size: 12px;
    }
  }
  &__close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
  }
  &__close {
    font-family: "MontrealHeavy";
    font-size: 28px;
    cursor: pointer;
  }
  &__info-image {
    height: 180px;
    margin-top: -66px;
  }
  &__buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 30px;
    padding: 0px 100px;
    @include mobile() {
      padding: 0px 10px;
    }
  }
}
</style>