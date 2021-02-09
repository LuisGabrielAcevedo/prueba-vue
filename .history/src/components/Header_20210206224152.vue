<template>
  <div class="header">
    <div class="header__content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
    showLogo() {
      return true;
    },
    token() {
      return this.$store.getters.token;
    }
  },
}
</script>

<style lang="scss">
.header {
    padding: 120px;
    padding-top: 20px;
    padding-bottom: 0;
    &__content { 
        height: 90px;
        background: #D62626 0% 0% no-repeat padding-box;
        border-radius: 33px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
