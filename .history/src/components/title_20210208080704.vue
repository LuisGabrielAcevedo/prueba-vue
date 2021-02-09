<template>
  <div class="title">
    <div class="title__content">
        <img
      class="title__image"
      src="@/assets/web/estrellas.png"
    />
        <div class="title__line"></div>
        <div class="title__text-contaniner">
          <span class="title__text">{{text}}</span>
        </div>
        <div class="title__line"></div>
    </div>
  </div>
</template> 

<script>
export default {
  name: 'Title',
  props: {
    text: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__line {
        width: 100%;
        height: 3px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        opacity: 1;
    }
    &__image {
      height: 24px;
      margin-bottom: 10px;
    }
    &__text-contaniner {
        margin: 6px;
    }
    &__text {
      font-family: MontrealHeavy;
      color: #D52626;
      font-size: 41px;
      line-height: 46px;
      @include mobile {
        font-size: 30px;
      }
    }
}
</style>
