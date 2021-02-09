<template>
  <div class="textarea" :style="{'width': label ? '440px': '330px'}">
    <div class="textareamain-box">
        <span class="textarealabel" v-if="label">
        {{ label }}
        <span v-if="required" class="textarearequired">*</span>
        </span>
        <input
        v-model="componentModel"
        @input="input()"
        class="textareafield"
        :type="type"
        :placeholder="placeholder"
        @focus="focus()"
        :maxlength="maxlength"
        autocomplete="off"
        :disabled="disabled"
        />
    </div>
    <div class="textareamessages">
       <div class="textareamessages-box">
            <span class="textareaerror">{{ error || "" }}</span>
            <span v-if="hint && !error" class="textareahint">{{ hint }}</span>
       </div>
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
.input {
    height: 68px;
    input::placeholder {
      color: #BCBCBC;
      font-family: MontrealBold;
      font-size: 15px;
    }
    &__main-box {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    &__field {
        border-style: none;
        background-color: white;
        width: 330px;
        height: 34px;
        border-radius: 18px;
        font-size: 17px;
        padding: 4px 10px;
        text-align: center;
    }
    input:focus {
       outline: 0;
    }
    &__messages {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        line-height: 11px !important;
        padding: 3px 0 0 10px;
    }
    &__error {
        color: #D62626;
        font-family: MontrealBold;
        font-size: 11px;
    }
    &__hint {
        color: #D62626;
        font-family: MontrealBold;
        font-size: 11px;
    }
    &__label {
        font-family: MontrealHeavy;
        margin-right: 10px;
    }
    &__messages-box {
        width:322px;
    }
}

</style>
