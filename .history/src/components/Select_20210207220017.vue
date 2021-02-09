<template>
  <div class="select">
    <div class="select__main-box">
        <span class="select__label">
        {{ label }}
        <span v-if="required" class="select__required">*</span>
        </span>
        <span class="select__icon-content" @click="focus()">
          <i class="fas fa-caret-down select__icon"></i>
        </span>
        <div
          class="select__field"
          @click="focus()"
          :class="{
            select__focus: open
          }"
         >
          <span v-if="componentModel">{{ componentModel }}</span>
          <span class="select__placeholder" v-else>{{ placeholder }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      componentModel: "",
      open: false
    };
  },
  mounted() {
    this.componentModel = "";
  },
  props: {
    field: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      required: false
    },
    items: {
      type: Array,
      required: true
    },
    model: {
      type: [String, Number],
      default: ""
    }
  },
  methods: {
    focus() {
      this.open = true;
      this.$emit("close-all");
    },
    blur() {
      this.open = false;
    },
    select(item) {
      this.componentModel = item.text;
      this.$emit("handle-input", {
        key: this.field,
        value: item.value
      });
      this.blur();
    }
  },
  watch: {
    model: {
      handler(newVal) {
        this.componentModel = newVal;
      }
    }
  }
};
</script>

<style lang="scss">
.select {
  width: 460px;
  height: 60px;
  position: relative;
  &__main-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__field {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 330px;
    height: 34px;
    border-radius: 18px;
    font-size: 17px;
    padding: 4px 10px;
  }
  &__label {
    font-family: MontrealHeavy;
    margin-right: 10px;
  }
  &__placeholder{
    color: #BCBCBC;
    font-family: MontrealBold;
    font-size: 17px;
  }
  &__icon-content {
    position: absolute
  }
}
</style>
