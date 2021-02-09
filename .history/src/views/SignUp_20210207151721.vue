<template>
  <div class="signUp">
    <div class="signUp__content">
      <Title text="REGISTRO"/>
      <span class="signUp__description">Es importante que verifiques tu email. En caso de ser ganador sólo se te contactará por éste medio y si tu email no es correcto no podrás recibir el premio.</span>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Radio  from '../components/Radio'
export default {
  name: 'SignUp',
  components: {
    Title,
    Radio
  },
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
  &__description {
    font-family: MontrealBold;
    font-size: 12px;
  }
}
</style>
