<template>
  <div class="awards">
    <div class="awards__content">
      <Title text="PREMIOS"/>
      <div class="awards__images-content">
        <div class="awards__images-item">
          <img
            class="awards__iphone"
            src="@/assets/web/premio-iphone.png"
          />
          <div class="awards__message-container">
            <span class="awards__message">40.000 RECARGAS</span>
            <span class="awards__message">A CELULAR DE $5.000</span>
          </div>
          <span class="awards__description">Por cada cuatro (4) códigos</span>
          <span class="awards__description">ingresados, podrás redimir</span>
          <span class="awards__description">recarga celular de $5.000</span>
        </div>
        <div class="awards__images-item">
          <img
            class="awards__iphone"
            src="@/assets/web/tarjetas-regalo.png"
          />
          <div class="awards__message-container">
            <span class="awards__message">10 BONOS DE </span>
            <span class="awards__message">FALABELLA DE $4’000.000</span>
          </div>
          <span class="awards__description">¡Entre más códigos registres</span>
          <span class="awards__description">más oportunidades tendrás</span>
          <span class="awards__description">de ganar!</span>
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
@import "@/assets/scss/mixins.scss";
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
    padding: 20px 0 40px 0;
  }
  &__images-content {
    display: flex;
    width: 100%;
    @include mobile {
      
    }
  }
  &__images-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 40px;
    margin: 0 60px;
  }
  &__iphone {
    height: 300px;
  }
  &__message-container {
     display: flex;
     flex-direction: column;
     background-color: #D62626;
     border-radius: 25px;
     padding: 8px 20px;
     width: 260px;
     line-height: 16px;
     text-align: center;
     margin: 20px 0;
  }
  &__message{
    color: white;
    font-family: MontrealBold;
    text-align: center;
  }
  &__description {
    color: #D62626;
    font-family: MontrealBold;
    line-height: 14px;
    font-size: 14px;
    letter-spacing: 1.9px;
  }
}
</style>
