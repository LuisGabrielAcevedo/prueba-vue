<template>
  <div class="myAccount">
    <div class="myAccount__content">
      <div class="myAccount__title">
        <Title text="MI CUENTA"/>
      </div>
      <div>
        <span class="myAccount__description">¡Bienvenido, <span class="myAccount__redDescription">Felipe López</span>!</span><br>
        <span class="myAccount__description">este es el estado de tu cuenta al momento:</span>
      </div>
      <div class="table">
        <div class="table__header">
          <span class="table__header-item">CANT.</span>
          <span class="table__header-item">CÓDIGO</span>
          <span class="table__header-item">FECHA</span>
          <span class="table__header-item">PREMIO</span>
        </div>
        <div class="table__data">
          <div class="table__data-item" v-for="(item, i) in winners" :key="i"></div>
        </div>
      </div>
      <div class="myAccount__footer">
          <div class="myAccount__footer-row">
            <span class="myAccount__footer-row-text">TOTAL CÓDIGOS</span>
            <div class="myAccount__footer-row-content">
              <span class="myAccount__footer-row-number">8</span>
            </div>
          </div>
      </div>
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
  &__title {
    margin-bottom: 20px;
  }
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
  &__description {
     font-family: MontrealHeavy;
     font-size: 24px;
  }
  &__redDescription {
    color: #D62626;
  }
  &__footer {
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: flex-end;
  }
  &__footer-row {
    display: flex;
    align-items: center;
  }
  &__footer-row-text {
    font-family: MontrealHeavy;
    font-size: 26px;
    margin-right: 10px;
  }
  &__footer-row-content {
    background-color: white;
    border: 1px solid #D62626;
    padding: 0 30px;
    border-radius: 25px;
  }
  &__footer-row-number {
    color: #D62626;
    font-family: MontrealHeavy;
    font-size: 26px;
  }
}
</style>
