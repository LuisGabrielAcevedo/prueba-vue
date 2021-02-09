<template>
  <div class="awards">
    <div class="awards__content">
      <Title text="PREMIOS"/>
      <div class="awards__images-content">
        <div class="awards__images-item">
          <img
            v-if="!mobile"
            class="awards__iphone"
            src="@/assets/web/premio-iphone.png"
          />
          <div class="awards__message-container">
            <span class="awards__message">40.000 RECARGAS A CELULAR DE $5.000</span>
          </div>
          <span class="awards__description">Por cada cuatro (4) códigos ingresados, podrás redimir recarga celular de $5.000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'Awards',
  components: {
    Title
  },
}
</script>

<style lang="scss">
.awards {
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
    padding: 20px 60px 60px 60px;
  }
  &__images-content {
    display: flex;
    width: 100%;
  }
  &__images-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  &__iphone {}
  &__message-container {
     background-color: #D62626;
     border-radius: 25px;
     padding: 10px 30px;
     width: 300px;
    text-align: center;
  }
  &__message{
    color: white;
    font-family: MontrealBold;
    text-align: center;
  }
  &__description {
    color: #D62626;
    font-family: MontrealBold;
  }
}
</style>
