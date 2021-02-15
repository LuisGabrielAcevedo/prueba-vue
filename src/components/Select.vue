<template>
  <div class="select">
    <div class="select__main-box">
        <div class="select__label-container" v-if="label">
          <span class="select__label">
          {{ label }}
          <span v-if="required" class="select__required">*</span>
          </span>
        </div>
        <div
          class="select__field"
          @click="focus()"
          :class="{
            select__focus: open
          }"
         >
          <span v-if="componentModel" class="select__text">{{ componentModel }}</span>
          <span class="select__placeholder" v-else>{{ placeholder }}</span>
          <span class="select__icon-content" @click="focus()">
            <i class="fas fa-caret-down select__icon"></i>
          </span>
          <div v-if="open" class="select__pre-box">
            <div class="select__box" :class="{ select__scroll: items.length > 6 }">
              <span
                @click.stop="select(item)"
                class="select__option"
                v-for="(item, i) in items"
                :key="i"
              >
              {{ item.text }}
              </span>
            </div>
          </div>
        </div>
    </div>
    <div class="select__messages">
       <div class="select__messages-box">
          <span class="select__error">{{ error || "" }}</span>
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
    },
    open: {
      handler(newVal) {
        console.log(newVal)
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";

.select {
  width: 420px;
  height: 60px;
  @include mobile() {
    width: 100% !important;
  }
  &__main-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__label-container {
    width: 140px;
    text-align: right;
    @include mobile() {
      width: 110px !important;
    }
  }
  &__field {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 34px;
    border-radius: 18px;
    font-size: 17px;
    padding: 4px 10px;
    cursor: pointer;
    position: relative;
    @include mobile() {
      height: 30px;
    }
  }
  &__label {
    font-family: MontrealHeavy;
    margin-right: 10px;
    @include mobile() {
      font-size: 14px;
    }
  }
  &__placeholder{
    color: #BCBCBC;
    font-family: MontrealBold;
    font-size: 15px;
    @include mobile() {
      font-size: 10px;
    }
  }
  &__icon-content {
    position: absolute;
    right: 12px;
  }
  &__icon {
    color: #D72626;
    font-size: 16px;
  }
  &__pre-box {
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    top: 36px;
    z-index: 4;
    cursor: pointer;
    border: 0.5px solid #9d9d9d;
    padding: 2px;
  }
  &__box {
    display: flex;
    flex-direction: column;
  }
  &__scroll {
    max-height: 160px;
    overflow-y: scroll;
  }
  &__option {
    font-size: 12px;
    color: black;
    padding: 6px 2px;
    font-family: MontrealRegular;
  }
  &__option:hover {
    background: #eee;
  }
  &__text {
    font-family: MontrealRegular;
    @include mobile() {
      font-size: 12px;
    }
  }
  &__error {
    color: #D62626;
    font-family: MontrealBold;
    font-size: 11px;
    @include mobile() {
      font-size: 9px;
    }
  }
  &__messages {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    line-height: 11px !important;
    padding: 3px 0 0 10px;
  }
  &__messages-box {
    padding-left: 100px;
    width: 100%;
    @include mobile() {
      padding-left: 70px;
    }
  }
}
</style>
