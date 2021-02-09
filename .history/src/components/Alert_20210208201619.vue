<template>
  <modal :dialog="show" :permanent="false" @close="close()">
    <div slot="component" class="alert">
      <div class="alert__close-">
        <span>X</span>
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
    padding: 20px 20px 10px 20px;
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
    font-family: "MontrealBold";
    font-size: 20px;
    text-align: center;
    text-align: center;
  }
  &__title {
    margin-bottom: 24px;
    font-family: "MontrealHeavy";
    text-align: center;
    color: #D62626;
  }
  &__btn {
    margin-top: 20px
  }
}
</style>