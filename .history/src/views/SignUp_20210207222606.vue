<template>
  <div class="signUp">
    <div class="signUp__content">
      <div class="signUp__title"><Title text="REGISTRO"/></div>
      <div class="signUp__form-row">
        <Input
          :model="user.fisrtName"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          field="fisrtName"
          label="NOMBRE"
          @handle-input="setValue($event)"
          placeholder=""
          :required="false"
          :error="errors.fisrtName"
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
        <div style="width: 460px;"></div>
      </div>
      <span class="signUp__description">Es importante que verifiques tu email. En caso de ser ganador sólo se te contactará por éste medio y si tu email no es correcto no podrás recibir el premio.</span>
      <div>
        <div class="signUp__radio-container">
          <Radio @handle-click="toggleTerms()" :value="terms"/>
          <span class="signUp__radio-text">Acepto los <span class="signUp__radio-text-action">términos y condiciones</span> de la promoción.</span>
        </div>
        <div class="signUp__radio-container">
          <Radio @handle-click="toggleTerms2()" :value="terms2"/>
          <span class="signUp__radio-text">Acepto los <span class="signUp__radio-text-action">términos y condiciones</span> de manejo de datos.</span>
        </div>
        <div class="signUp__radio-container">
          <div style="width:40px;">
            <Radio @handle-click="toggleTerms3()" :value="terms3"/>
          </div>
          <span class="signUp__radio-text">Declaro que no soy trabajador o colaborador de PepsiCo, y/o sus compañías asociadas ni de los distribuidores de PepsiCo.</span>
        </div>
      </div>
      <div class="signUp__button-container">
        <Button text="ENVIAR" @handle-click="send()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Radio  from '../components/Radio'
import Button  from '../components/Button'
import Input from '../components/Input'
import Select from '../components/Select'
export default {
  name: 'SignUp',
  data() {
    return {
      terms: true,
      terms2: true,
      terms3: true,
      user: {},
      loading: false,
      touch: false,
      errors: {},
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
    Title,
    Radio,
    Button,
    Input,
    Select
  },
  methods: {
    toggleTerms() {
      this.terms = !this.terms
    },
    toggleTerms2() {
      this.terms2 = !this.terms2
    },
    toggleTerms3() {
      this.terms3 = !this.terms3
    },
    send() {
      console.log(this.user)
    },
    goTo(path) {
      if (this.$route.path !== `/${path}`) this.$router.push(path);
    },
    setValue(e) {
      this.user[e.key] = e.value;
      this.validate();
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
        this.user.fisrtName &&
        !(this.user.fisrtName.length > 6 && this.user.fisrtName.length < 20)
      ) {
        errors.fisrtName = "El nombre debe tener entre 6 y 20 carácteres.";
      }
      if (
        this.user.lastName &&
        !(this.user.lastName.length > 6 && this.user.lastName.length < 20)
      ) {
        errors.lastName = "El apellido debe tener entre 6 y 20 carácteres.";
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
        if (!this.user.fisrtName) errors.fisrtName = "Este campo es obligatorio.";
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
  &__title {
    margin-bottom: 40px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 60px 40px 60px;
    @include tablet() {
     padding: 20px 20px 40px 20px;
    }
    @include mobile() {
      padding: 20px 20px 40px 20px;
    }
  }
  &__radio-container {
    display: flex;
    align-content: center;
    margin-bottom: 10px;
    width: 400px;
  }
  &__description {
    font-family: MontrealBold;
    font-size: 12px;
    margin-bottom: 20px;
  }
  &__radio-text {
    font-family: MontrealBold;
    font-size: 12px;
  }
  &__radio-text-action {
    text-decoration: underline;
    cursor: pointer;
  }
  &__button-container  {
    margin-top: 40px;
  }
  &__form-row {
    display: flex;
    @include mobile() {
      flex-direction: column;
    }
  }
}
</style>
