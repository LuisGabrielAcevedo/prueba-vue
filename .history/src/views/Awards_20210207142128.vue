<template>
  <div class="awards">
    <div class="awards__content">
      <Title text="PREMIOS"/>
      <div class="awards__images-content">

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
  }
}
</script>

<style lang="scss">
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
    padding: 20px 60px 60px 60px;
  }
  &__images-content {
    display: flex;
    width: 100%;
  }
}
</style>
