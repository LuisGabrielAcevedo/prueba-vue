<template>
  <div class="preview">
    <div class="preview__modal">
      <img
      class="preview__image"
      src="@/assets/web/preview-logo.png"
    />
        <span class="preview__title">¡MUY PRONTO</span>
        <span class="preview__title preview__title2">COMIENZA LA PROMO!</span>
        <div class="preview__section" v-if="!mobile">
          <span class="preview__text">Conserva tus tazos. Cuantos más códigos</span>
          <span class="preview__text">registres, más oportunidades tendrás de ganar.</span>
        </div>
        <div class="preview__section" v-if="mobile">
          <span class="preview__text">Conserva tus tazos.</span>
          <span class="preview__text">Cuantos más códigos registres,</span>
          <span class="preview__text">más oportunidades tendrás de ganar.</span>
        </div>
        <span v-if="!mobile" class="preview__endMessage" style="margin-top: 46px;">FALTAN <span class="preview__number">02</span> DÍAS</span>
        <span v-if="mobile" class="preview__endMessage" style="margin-top: 46px;">FALTAN</span>
        <span v-if="mobile" class="preview__number">{{days}}</span>
        <span v-if="mobile" class="preview__endMessage">DÍAS</span>
    </div>
  </div>
</template>

<script>
import {Activity} from '../api'
export default {
  name: 'Preview',
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
  },
  mounted() {
    this.getActivity()
  },
  methods: {
    getActivity() {
      Activity().then(resp => {
        this.days = resp.data.days
        if (this.days === 0) {
          this.goTo('/ingresar')
        }
      })
    },
    goTo(path) {
      if (this.$route.path !== `/${path}`) this.$router.push(path);
    },
  },
  data() {
    return {
      days: 0
    };
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__image{
    height: 80px;
    margin-bottom: 70px;
    @include mobile() {
      height: 60px;
      margin-bottom: 60px;
      margin-top: 10px;
    }
  }
  &__modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-radius: 25px;
    padding: 30px 60px 60px 60px;
    @include mobile() {
      width: 92%;
      height: 92%;
      padding: 30px 10px 60px 10px;
    }
  }
  &__title {
    font-family: MontrealHeavy;
    color: #D62626;
    font-size: 46px;
    line-height: 46px;
    text-align: center;
    @include mobile() {
      font-size: 24px;
      line-height: 24px;
    }
  }
  &__title2 {
    margin-bottom: 46px;
    text-align: center;
  }
  &__endMessage {
    font-family: MontrealHeavy;
    color: #D62626;
    font-size: 46px;
    line-height: 46px;
    text-align: center;
    @include mobile() {
      font-size: 30px;
      line-height: 30px;
    }
  }
  &__number {
    font-family: MontrealHeavy;
    color: #D62626;
    font-size: 80px;
    line-height: 80px;
    text-align: center;
    @include mobile() {
      font-size: 80px;
      line-height: 80px;
      margin-bottom: 8px;
    }
  }
  &__text {
    font-family: MontrealBold;
    font-size: 24px;
    text-align: center;
    @include mobile() {
      font-size: 14px;
    }
  }
}
</style>
