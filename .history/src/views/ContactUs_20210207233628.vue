<template>
  <div class="contactUs">
    <div class="awards__content">
      <Title text="PREMIOS"/>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'ContactUs',
  components: {
    Title
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.contactUs {
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
}
</style>
