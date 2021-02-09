<template>
  <div class="myAccount">
    <div class="myAccount__content">
      <Title text="MI CUENTA"/>
      <span class="myAccount__description">¡Bienvenido, <span class="myAccount__redDescription">Felipe López</span>!</span>
      <span class="myAccount__description">este es el estado de tu cuenta al momento:</span>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'MyAccount',
  components: {
    Title
  },
}
</script>

<style lang="scss">
.myAccount {
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
    padding: 20px 0 40px 0;
    width: 500px;
  }
  &__description {
    
  }
}
</style>
