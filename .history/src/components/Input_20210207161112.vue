<template>
  <div class="input">
    <div>
        <span class="input__label">
        {{ label }}
        <span v-if="required" class="input__required">*</span>
        </span>
        <input
        v-if="onlyNumbers"
        v-model="componentModel"
        @input="input()"
        class="input__field"
        :type="type"
        :placeholder="placeholder"
        @keypress="isNumber($event)"
        @focus="focus()"
        :maxlength="maxlength"
        :disabled="disabled"
        />
        <input
        v-else
        v-model="componentModel"
        @input="input()"
        class="input__field"
        :type="type"
        :placeholder="placeholder"
        @focus="focus()"
        :maxlength="maxlength"
        autocomplete="off"
        :disabled="disabled"
        />
    </div>
    <div class="input__messages">
        <span class="input__error">{{ error || "" }}</span>
        <span v-if="hint && !error" class="input__hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
    data() {
    return {
      componentModel: ""
    };
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
    placeholder: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      required: false
    },
    error: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    model: {
      type: [String, Number],
      default: ""
    },
    onlyNumbers: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: String,
      default: "100"
    }
  },
  methods: {
    input() {
      this.$emit("handle-input", {
        key: this.field,
        value: this.componentModel
      });
    },
    focus() {
      this.$emit("close-all");
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    }
  },
  watch: {
    model: {
      immediate: true,
      handler(newVal) {
        this.componentModel = newVal;
      }
    }
  }
}
</script>

<style lang="scss">
.input {}
</style>
