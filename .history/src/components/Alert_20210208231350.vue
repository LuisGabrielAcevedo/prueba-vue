<template>
  <modal :dialog="show" :permanent="false" @close="close()">
    <div slot="component" class="alert">
      <div v-if="data &&data.showClose"  class="alert__close-container" @click="close()">
        <span class="alert__close">X</span>
      </div>
      <img
      v-if="data &&data.type === 'INFO'" 
      class="alert__info-image"
      src="@/assets/web/info.png"
     />
     <img
      v-if="data &&data.type === 'SUCCESS'" 
      class="alert__ckeck-image"
      src="@/assets/web/check.png"
     />
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
        <div class="alert__btn">
          <Button v-if="data && data.buttonLabel" :text="data.buttonLabel" @handle-click="close()"/>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from "./Modal";
import Button from "./Button";

export default {
  name: "Alert",
  components: {
    Modal,
    Button
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
  padding-bottom: 20px;
  &__content {
    padding: 20px 30px 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -50px;
    @include mobile() {
      padding: 20px 30px 10px 30px;
    }
  }
  &__messages-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__message {
    font-family: "MontrealBold";
    font-size: 18px;
    text-align: center;
    text-align: center;
  }
  &__title {
    margin-bottom: 24px;
    font-family: "MontrealHeavy";
    text-align: center;
    color: #D62626;
    font-size: 28px;
    @include mobile() {}
  }
  &__btn {
    margin-top: 20px
  }
  &__close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 20px;
  }
  &__close {
    font-family: "MontrealHeavy";
    font-size: 30px;
    cursor: pointer;
  }
  &__info-image {
    height: 180px;
    margin-top: -66px;
  }
  &__ckeck-image{
    height: 120px;
    margin-top: -22px;
    margin-bottom: 48px;
  }
}
</style>