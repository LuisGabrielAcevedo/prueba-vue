<template>
  <div class="termsAndConditions">
    <Title text="CÓMO "/>
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
.termsAndConditions {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>
