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

export default {
  name: 'EnterCode',
  components: {
    Title,
    Input
  },
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
    top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text{
    font-family: MontrealHeavy;
    font-size: 22px;
  }
}
</style>
