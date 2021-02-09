<template>
  <div class="signUp">
    <div class="signUp__content">
      <Title text="REGISTRO"/>
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
          :required="true"
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
          :required="true"
          :error="errors.lastName"
        />
      </div>
       <div class="signUp__form-row">
        <Input
          label="Cédula"
          field="idn"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          :model="user.idn"
          @handle-input="setValue($event)"
          placeholder=""
          :required="true"
          :error="errors.idn"
          :onlyNumbers="true"
        />
        <Input
          field="phone"
          label="Celular"
          :model="user.phone"
          @close-all="
            $refs.operator.open = false;
            $refs.department_state.open = false;
          "
          @handle-input="setValue($event)"
          placeholder=""
          :required="true"
          hint="En caso de ser ganador, a este número celular se hará la recarga."
          :error="errors.phone"
          :onlyNumbers="true"
        />
      </div>
      <div class="signUp__form-row">
        <Select
          ref="department_state"
          @close-all="$refs.operator.open = false"
          field="department_state"
          label="Departamento"
          :model="user.department_state"
          placeholder="Seleccionar Departamento"
          :items="fomattedStates"
          @handle-input="setValue($event)"
          :required="true"
          :error="errors.department_state"
        />
        <Select
          ref="operator"
          field="operator"
          @close-all="$refs.department_state.open = false"
          label="Operador"
          :model="user.operator"
          placeholder="Seleccionar Operador"
          :items="fomattedOperators"
          @handle-input="setValue($event)"
          :required="true"
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
          label="Correo Electrónico"
          @handle-input="setValue($event)"
          placeholder=""
          :required="true"
          :error="errors.email"
        />
        <div></div>
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
      console.log('aqui')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.signUp {
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
    padding: 20px 60px 40px 60px;
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
    display: flex
  }
}
</style>
