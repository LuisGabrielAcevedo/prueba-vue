<template>
  <div class="contactUs">
    <div class="contactUs__content">
      <div class="contactUs__title-container">
         <Title text="CONTÁCTENOS"/>
      </div>
      <span class="contactUs__text">Por favor, contáctanos a través de este formulario</span>
      <span class="contactUs__text">y responderemos tu mensaje.</span>
      <Select
        ield="topic"
            ref="topic"
            :model="message.topic"
            label="Tema por el cuál nos contactas"
            placeholder="Seleccionar un tema"
            :items="formattedTopics"
            @handle-input="setValue($event)"
            :required="true"
          />
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


export default {
  name: 'ContactUs',
  components: {
    Title,
    Button,
    Select
  },
  computed: {
    formattedTopics() {
      return this.topics.map((s) => ({
        value: s.text,
        text: s.text,
      }));
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
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 100px 40px 100px;
  }
  &__title-container {
    margin-bottom: 40px;
  }
  &__button-container{
    margin-top: 40px;
  }
  &__text {
    font-family: MontrealHeavy;
    font-size: 20px;
    line-height: 20px;
  }
}
</style>
