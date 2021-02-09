<template>
  <div class="contactUs">
    <div class="contactUs__content">
      <div class="contactUs__title-container">
         <Title text="CONTÁCTENOS"/>
      </div>
      <span class="contactUs__text">Por favor, contáctanos a través de este formulario</span>
      <span class="contactUs__text">y responderemos tu mensaje.</span>
      <div class="contactUs__button-container">
        <Button text="ENVIAR" @handle-click="send()"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Button from '../components/Button'

export default {
  name: 'ContactUs',
  components: {
    Title,
    Button
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
  &__button-container{}
  &__text {
    font-family: MontrealHeavy;
    font-size: 20px;
    line-height: 20px;
  }
}
</style>
