<template>
  <modal :dialog="show" :permanent="false" @close="close()">
    <div slot="component" class="alert">
      <!-- <img
        class="alert__close"
        src="@/assets/img/mobile/btn-close.png"
        @click="close()"
        v-if="data && data.showClose"
      />
      <img
        v-if="!mobile"
        class="alert__image"
        src="@/assets/img/web/fondo-modal.png"
      />
      <img
        v-if="mobile"
        class="alert__image"
        src="@/assets/img/mobile/fondo-modal.png"
      /> -->
      <div class="alert__container">
        <!-- <img class="alert__logo" src="@/assets/img/web/logo-modal.png" /> -->
      </div>
      <div class="alert__content" v-if="data">
        <span v-if="true" class="alert__title">{{ data.title }}</span>
        <span v-if="data.message" class="alert__message">{{
          data.message
        }}</span>
        <div v-if="data.messages" class="alert__messages-content">
          <span
            class="alert__message"
            v-for="(message, i) in data.messages"
            :key="i"
            >{{ message }}</span
          >
        </div>
        <div>
          <!-- <img
            v-if="data && data.buttonLabel"
            class="alert__btn"
            src="@/assets/img/web/btn-aceptar.png"
            @click="close()"
          /> -->
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal";
import Modal from "./";

export default {
  name: "Alert",
  components: {
    Modal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {}
  },
  methods: {
    close() {
      this.$emit("close");
    }
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins.scss";

.alert {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  &__image {
    width: 94%;
    height: 100px;
  }
  &__close {
    position: absolute;
    cursor: pointer;
    top: 6px;
    right: 6px;
    height: 36px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -40px;
  }
  &__logo {
    height: 100px;
    @include mobile() {
      height: 80px;
    }
  }
  &__content {
    padding: 40px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__messages-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__message {
    // color: $color-secondary;
    font-family: "MontserratRegular";
    text-align: center;
  }
  &__btn {
    height: 80px;
    margin-top: 20px;
    cursor: pointer;
  }
  &__title {
    margin-bottom: 30px;
    font-family: "GothamBold";
    text-align: center;
  }
}
</style>