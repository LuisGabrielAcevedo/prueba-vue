<template>
  <div class="select">
    <div class="select__main-box">
        <span class="select__label">
        {{ label }}
        <span v-if="required" class="select__required">*</span>
        </span>
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
  &__label {
    font-family: MontrealHeavy;
    margin-right: 10px;
  }
}
</style>
