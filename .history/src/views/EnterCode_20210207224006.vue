<template>
  <div class="enterCode">
     <img
      class="enterCode__content"
      src="@/assets/web/copa.png"
     />
     <div class="enterCode__image">

     </div>
  </div>
</template>

<script>
export default {
  name: 'EnterCode',
}
</script>

<style lang="scss">
.enterCode {
  display: flex;
  justify-content: center;
  &__image {
    margin-top: 10px;
    height: 550px;
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
}
</style>
