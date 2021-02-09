<template>
  <div class="enterCode">
     <img
      class="enterCode__image"
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
}
</style>
