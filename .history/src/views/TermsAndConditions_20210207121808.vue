<template>
  <div class="termsAndConditions">
    <Title :text="TÉRMINOS Y CONDICIONES"/>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'TermsAndConditions',
  components: {
    Title
  }
}
</script>

<style lang="scss">
.termsAndConditions {}
</style>
