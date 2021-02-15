<template>
  <div class="awards">
    <div class="awards__content">
      <img
      class="awards__title"
      src="@/assets/web/titles/Titulo_Premios.png"
      />
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
            class="awards__gift"
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
    <div class="awards__footer">
      <span class="awards__footer-text">Aplican Términos y Condiciones.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Awards',
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.awards {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  padding-bottom: 20px;
  @include mobile {
      width: 100%;
      margin: 0;
  }
  &__title {
    height: 90px;
    @include mobile() {
      height: 50px;
      margin-bottom: 20px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 0 40px 0;
    @include mobile() {
      padding: 20px 10px 40px 10px;
      width: 88%;
    }
  }
  &__images-content {
    display: flex;
    width: 100%;
    @include mobile {
      flex-direction: column;
    }
  }
  &__images-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 40px;
    margin: 0 60px;
    @include mobile {
      margin: 0 20px;
    }
  }
  &__iphone {
    height: 260px;
    @include mobile {
      height: 200px;
    }
  }
  &__gift {
    height: 260px;
    @include mobile {
      height: 200px;
    }
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
     @include mobile() {
      padding: 8px 10px;
      width: 230px;
     }
  }
  &__message{
    color: white;
    font-family: MontrealBold;
    text-align: center;
    @include mobile() {
      font-size: 14px;
    }
  }
  &__description {
    color: #D62626;
    font-family: MontrealBold;
    line-height: 14px;
    font-size: 14px;
    letter-spacing: 1.9px;
    @include mobile() {
      font-size: 12px;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: -170px;
    margin-top: 20px;
    @include mobile() {
      margin: 20px;
      margin-right: 90px;
    }
  }
  &__footer-text {
    font-family: MontrealBold;
    @include mobile() {
      font-size: 12px;
    }
  }
}
</style>
