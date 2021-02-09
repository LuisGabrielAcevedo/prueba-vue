<template>
  <div class="signIn">
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
}
</script>

<style lang="scss">
.signIn {
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
}
</style>
