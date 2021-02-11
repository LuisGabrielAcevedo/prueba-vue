<template>
  <div class="contactUs">
    <div class="contactUs__content">
      <div class="contactUs__title-container">
         <Title text="CONTÁCTENOS"/>
      </div>
      <span class="contactUs__text">Por favor, contáctanos a través de este formulario</span>
      <span class="contactUs__text">y responderemos tu mensaje.</span>
      <div class="contactUs__form">
        <Select
        field="topic"
        ref="topic"
        :model="message.topic"
        label="ASUNTO"
        placeholder="Seleccionar asunto"
        :items="formattedTopics"
        @handle-input="setValue($event)"
      />
      <Textarea
        field="message"
        label="MENSAJE"
        @close-all="$refs.topic.open = false"
        :model="message.message"
        @handle-input="setValue($event)"
        :error="error"
        />
      </div>
      <div class="contactUs__button-container">
        <Button text="ENVIAR" @handle-click="send()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Button from '../components/Button'
import Select from '../components/Select'
import Textarea from '../components/Textarea'
import {SaveMessage} from '../api'

export default {
  name: 'ContactUs',
  components: {
    Title,
    Button,
    Select,
    Textarea
  },
  computed: {
    formattedTopics() {
      return this.topics.map((s) => ({
        value: s.text,
        text: s.text,
      }));
    },
  },
  methods: {
    setValue(e) {
      this.message[e.key] = e.value;
      this.validate();
    },
    validate() {
      this.error =
        this.message.message && !(this.message.message.length > 10)
          ? "El mensaje debe tener mas de 10 carácteres."
          : "";
    },
    send() {
      if (!this.message.message || !this.message.topic) {
        this.$store.dispatch("setAlert", {
          buttonLabel: "Aceptar",
          showClose: true,
          type:'INFO',
          message: "¡Debes completar los campos requeridos!.",
        });
      } else {
        if (!this.error) {
          this.loading = true;
          const topic = this.topics.find((t) => t.text === this.message.topic);
          SaveMessage({
            ...this.message,
            topic: topic.value,
          })
            .then(() => {
              this.loading = false;
              this.$store.dispatch("setAlert", {
                showClose: true,
                type:'SUCCESS',
                title:
                  "¡EL MENSAJE FUE ENVIADO EXITOSAMENTE!",
              });
              this.message = {
                message: "",
                topic: "",
              };
            })
            .catch(() => {
              this.loading = false;
              this.$store.dispatch("setAlert", {
                buttonLabel: "Aceptar",
                showClose: true,
                type:'INFO',
                message: "¡Hubo un problema!",
              });
            });
        }
      }
    },
  },
  data() {
    return {
      message: {},
      loading: false,
      error: "",
      topics: [
        {
          text: "Problema con mi recarga",
          value: 1,
        },
        {
          text: "Consulta general",
          value: 2,
        },
        {
          text: "Cambio de operador",
          value: 3,
        },
        {
          text: "No pude registrar mi código",
          value: 4,
        },
      ],
    };
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.contactUs {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 100px 40px 100px;
    @include mobile() {
      width: 100%;
      padding: 20px 10px 40px 10px;
    }
  }
  &__title-container {
    margin-bottom: 40px;
  }
  &__button-container{
    margin-top: 40px;
    display: flex;
    justify-content: center;
  }
  &__text {
    font-family: MontrealHeavy;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    @include mobile() {
      font-size: 16px;
      line-height: 16px;
    }
  }
  &__form {
    margin-top: 20px;
  }
}
</style>
