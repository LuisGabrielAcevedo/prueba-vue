<template>
  <div class="signUp">
    <div class="signUp__content">
      <div class="signUp__title-content">
        <img
        class="signUp__title"
        src="@/assets/web/titles/Titulo_Registro.png"
        />
      </div>
      <div class="signUp__form-row">
        <Input
          :model="user.firstName"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          field="firstName"
          label="NOMBRE"
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          :error="errors.firstName"
        />
        <Input
          :model="user.lastName"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          field="lastName"
          label="APELLIDO"
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          :error="errors.lastName"
        />
      </div>
       <div class="signUp__form-row">
        <Input
          label="CÉDULA"
          field="idn"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          :model="user.idn"
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          :error="errors.idn"
          :onlyNumbers="true"
        />
        <Input
          field="phone"
          label="CELULAR"
          :model="user.phone"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          hint="*En caso de ser ganador, a este número celular se hará la recarga."
          :error="errors.phone"
          :onlyNumbers="true"
        />
      </div>
      <div class="signUp__form-row">
        <Select
          ref="department_state"
          @close-all="$refs.operator.open = false"
          field="department_state"
          label="DPTO."
          :model="user.department_state"
          placeholder="Seleccionar Departamento"
          :items="fomattedStates"
          @handle-input="setValue($event)"
          :required="false"
          :error="errors.department_state"
        />
        <Select
          ref="operator"
          field="operator"
          @close-all="$refs.department_state.open = false"
          label="OPERADOR"
          :model="user.operator"
          placeholder="Seleccionar Operador"
          :items="fomattedOperators"
          @handle-input="setValue($event)"
          :required="false"
          :error="errors.operator"
        />
      </div>
       <div class="signUp__form-row">
        <Input
          :model="user.email"
          field="email"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          label="EMAIL"
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          :error="errors.email"
        />
        <div style="width: 420px;">
          
        </div>
      </div>
      <span class="signUp__description">Es importante que verifiques tus datos especialmente número de celular y operador pues en caso de ser ganador, sólo se te contactará por esté medio.</span>
      <div class="signUp__footer">
        <div>
          <div class="signUp__radio-container">
            <div>
              <Radio @handle-click="toggleTerms()" :value="terms"/>
            </div>
            <span class="signUp__radio-text">Acepto los <span class="signUp__radio-text-action" @click="goToTerms()">términos y condiciones</span> de la promoción y de manejo de datos.</span>
          </div>
          <div class="signUp__radio-container">
            <div style="width:40px;">
              <div>
                <Radio @handle-click="toggleTerms4()" :value="terms4"/>
              </div>
            </div>
            <span class="signUp__radio-text" style="margin-left: -12px;">Soy mayor de edad (Cumplidos antes del 01 marzo del 2021).</span>
          </div>
        </div>
        <div class="signUp__button-container">
          <Button text="ENVIAR" @handle-click="send()"/>
        </div>
      </div>
    </div>
    <modal :dialog="dialog" @close="dialog = false" width="600">
      <signup-confirm
        v-if="dialog"
        :user="user"
        slot="component"
        @close="dialog = false"
        @close-success="closeSuccess($event)"
      ></signup-confirm>
    </modal>
  </div>
</template>

<script>
import Radio  from '../components/Radio'
import Button  from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
import Modal from '../components/Modal'
import SignupConfirm from '../components/SignUpConfirm'

export default {
  name: 'SignUp',
  data() {
    return {
      terms: false,
      terms4: false,
      user: {},
      loading: false,
      touch: false,
      errors: {},
      dialog: false,
      operators: [
        "Claro",
        "Movistar",
        "Tigo",
        "Virgin",
        "Avantel",
        "ETB",
        "Flash Mobile",
        "Móvil Éxito"
      ],
      states: [
        "AMAZONAS",
        "ANTIOQUIA",
        "ARAUCA",
        "ATLÁNTICO",
        "BOGOTÁ D.C.",
        "BOLÍVAR",
        "BOYACÁ",
        "CALDAS",
        "CAQUETA",
        "CAUCA",
        "CESAR",
        "CHOCÓ",
        "CÓRDOBA",
        "CUNDINAMARCA",
        "GUAINÍA",
        "GUAVIARE",
        "HUILA",
        "MAGDALENA",
        "NARIÑO",
        "RISARALDA",
        "NORTE DE SANTANDER",
        "QUINDIO",
        "SANTANDER",
        "SUCRE",
        "TOLIMA",
        "VALLE DEL CAUCA",
        "CASANARE",
        "LA GUAJIRA",
        "META",
        "SAN ANDRES",
        "PUTUMAYO",
        "VAUPÉS",
        "VICHADA"
      ]
    };
  },
  components: {
    Radio,
    Button,
    Input,
    Select,
    Modal,
    SignupConfirm
  },
  methods: {
    toggleTerms() {
      this.terms = !this.terms
    },
    toggleTerms4() {
      this.terms4 = !this.terms4
    },
    send() {
      if (
        !this.user.firstName ||
        !this.user.lastName ||
        !this.user.email ||
        !this.user.department_state ||
        !this.user.idn ||
        !this.user.operator ||
        !this.user.phone
      ) {
        this.touch = true;
        this.validate();
        this.$store.dispatch("setAlert", {
          buttonLabel: "Aceptar",
          type:'INFO',
          showClose: true,
          message: "¡Debes completar los campos requeridos!."
        });
      } else {
        if (!Object.keys(this.errors).length) {
          if (!this.terms) {
            this.$store.dispatch("setAlert", {
              buttonLabel: "Aceptar",
              type:'INFO',
              showClose: true,
              message: "¡Debes aceptar los términos y condiciones de la promoción y de manejo de datos!."
            });
          } else if (!this.terms4) {
            this.$store.dispatch("setAlert", {
              buttonLabel: "Aceptar",
              type:'INFO',
              showClose: true,
              message: "¡Para participar en la actividad debes ser mayor de edad!."
            });
          }else {
            this.dialog = true;
          }
        } else {
          const e = [];
          Object.keys(this.errors).forEach(key => {
            e.push(this.errors[key]);
          })
          this.$store.dispatch("setAlert", {
            buttonLabel: "Aceptar",
            type:'INFO',
            showClose: true,
            messages: e
          });
        }
      }
    },
    goTo(path) {
      if (this.$route.path !== `/${path}`) this.$router.push(path);
    },
    goToTerms() {
      window.open(
        `${location.origin}/terminos-y-condiciones`,
        "_blank"
      );
    },
    setValue(e) {
      this.user[e.key] = e.value;
      this.validate();
    },
    closeSuccess(resp) {
      this.dialog = false;
      this.user = {
        firstName: "",
        lastName: "",
        email: "",
        department_state: "",
        idn: "",
        operator: "",
        phone: ""
      };
      this.$store.dispatch("setToken", resp.token);
      this.$store.dispatch("setUser", resp.user);
      this.goTo("/ingresar-codigo");
    },
    validate() {
      if (this.user.phone) this.user.phone = this.user.phone.trim();
      if (this.user.idn) this.user.idn = this.user.idn.trim();
      if (this.user.email) {
        this.user.email = this.user.email.trim();
      }
      let errors = {};
      const emailReg = /^[a-zA-Z0-9_\-\.]{5,20}@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const idReq = /^([1-9]{1}[0-9]{6,9})$/;
      const phoneReq = /^(300|301|302|304|305|310|311|312|313|314|315|316|317|318|319|320|321|322|323|324|350|351){1}[0-9]{1}[0-9]{6}$/;
      if (this.user.email && !emailReg.test(this.user.email)) {
        errors.email = "Ingresa un correo válido.";
      }
      if (
        this.user.firstName &&
        !(this.user.firstName.length >= 3 && this.user.firstName.length < 20)
      ) {
        errors.firstName = "El nombre debe tener entre 3 y 20 carácteres.";
      }
      if (
        this.user.lastName &&
        !(this.user.lastName.length >= 3 && this.user.lastName.length < 20)
      ) {
        errors.lastName = "El apellido debe tener entre 3 y 20 carácteres.";
      }
      if (this.user.phone && !phoneReq.test(this.user.phone)) {
        errors.phone = "Ingresa un número de celular válido.";
      }
      if (this.user.phone && !(this.user.phone.length === 10)) {
        errors.phone = "El celular debe tener 10 carácteres.";
      }
      if (this.user.idn && !idReq.test(this.user.idn)) {
        errors.idn = "Ingresa un número de cédula válido.";
      }
      if (this.user.idn && this.user.idn.length === 10) {
        if (!(+this.user.idn > 1000000000 && +this.user.idn < 1999999999))
          errors.idn = "Ingresa un número de cédula válido.";
      }
      if (this.touch) {
        if (!this.user.firstName) errors.firstName = "Este campo es obligatorio.";
        if (!this.user.lastName) errors.lastName = "Este campo es obligatorio.";
        if (!this.user.email) errors.email = "Este campo es obligatorio.";
        if (!this.user.idn) errors.idn = "Este campo es obligatorio.";
        if (!this.user.phone) errors.phone = "Este campo es obligatorio.";
        if (!this.user.operator) errors.operator = "Este campo es obligatorio.";
        if (!this.user.department_state)
          errors.department_state = "Este campo es obligatorio.";
      }
      this.errors = errors;
    },
  },
  computed: {
    fomattedStates() {
      return this.states.map(s => ({
        value: s,
        text: s
      }));
    },
    fomattedOperators() {
      return this.operators.map(o => ({
        value: o,
        text: o
      }));
    }
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.signUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  &__title {
    height: 80px;
    @include mobile() {
      height: 50px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 10px 60px 10px 60px;
    @media only screen and(max-width: 600px) {
     padding: 20px 10px 40px 10px;
     margin-bottom: 20px;
     width: 88%;
    }
  }
  &__radio-container {
    display: flex;
    align-content: center;
    margin-bottom: 10px;
    width: 420px;
    @include mobile() {
      width: 100%;
    }
  }
  &__description {
    font-family: MontrealBold;
    font-size: 12px;
    margin-bottom: 10px;
    @include mobile() {
      font-size: 10px;
    }
  }
  &__radio-text {
    font-family: MontrealBold;
    font-size: 12px;
    @include mobile() {
      font-size: 10px;
    }
  }
  &__radio-text-action {
    text-decoration: underline;
    cursor: pointer;
  }
  &__button-container  {
    @include mobile () {
      margin-top: 20px;
    }
  }
  &__form-row {
    display: flex;
    @include mobile() {
      flex-direction: column;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @include mobile() {
      flex-direction: column;
      align-items: center;
    }
  }
}

</style>
