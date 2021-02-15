<template>
  <div class="myAccount">
    <div class="myAccount__content">
      <img
        class="myAccount__title"
        src="@/assets/web/titles/Titulo_Mi_Cuenta.png"
      />
      <div class="myAccount__description-content">
        <span class="myAccount__description">¡Bienvenido, <span class="myAccount__redDescription capital">{{name}}</span>!</span><br>
        <span class="myAccount__description">este es el estado de tu cuenta al momento:</span>
      </div>
      <div class="table">
        <div class="table__header">
          <span v-if="!mobile" class="table__header-item">CANT.</span>
          <span class="table__header-item">CÓDIGO</span>
          <span class="table__header-item">FECHA</span>
          <span class="table__header-item">PREMIO</span>
        </div>
        <div class="table__data myAccount__table">
          <div class="myAccount__scroll">
            <div class="table__data-row" v-for="(item, i) in data" :key="i">
            <span v-if="!mobile" class="table__data-row-item">{{i + 1}}</span>
            <span class="table__data-row-item">{{item.code}}</span>
            <span class="table__data-row-item">{{formatDate(item.created_at)}}</span>
            <span class="table__data-row-item" :class="{
                  'table--data-row-item-selected': item.result
                }">{{item.result ? 'RECARGA' : '-'}}</span>
          </div>
          </div>
        </div>
      </div>
      <div class="myAccount__footer">
          <div class="myAccount__footer-row">
            <span class="myAccount__footer-row-text">TOTAL CÓDIGOS</span>
            <div class="myAccount__footer-row-content">
              <span class="myAccount__footer-row-number">{{data.length}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GetCodes} from '../api'
export default {
  name: 'MyAccount',
  data() {
    return {
      data: []
    };
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
    user() {
      return this.$store.getters.user;
    },
    name() {
      return this.user ? this.user.name : "";
    }
  },
  mounted() {
    this.getCodes()
  },
  methods: {
    getCodes() {
      GetCodes().then(resp => {
        this.data = resp.data
      }) 
    }, 
    formatDate(date) {
      if (date) {
        const splitDate = date.split(" ")[0].split("-");
        return `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
      } else {
        return "";
      }
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.myAccount {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    height: 90px;
    margin-bottom: 20px;
    @include mobile() {
      height: 50px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.7);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 0 40px 0;
    @include mobile() {
      width: 88%;
      padding: 20px 10px 40px 10px;
      margin-bottom: 20px;
    }
  }
  &__description-content {
     @include mobile() {
      text-align: center;
      padding: 0 10px;
     }
  }
  &__description {
     font-family: MontrealHeavy;
     font-size: 24px;
     line-height: 24px;
     @include mobile() {
       font-size: 14px;
       line-height: 14px;
       text-align: center;
     }
  }
  &__redDescription {
    color: #D62626;
  }
  &__footer {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;
    @include mobile() {
      padding-right: 20px;
    }
  }
  &__footer-row {
    display: flex;
    align-items: center;
  }
  &__footer-row-text {
    font-family: MontrealHeavy;
    font-size: 26px;
    margin-right: 20px;
    @include mobile() {
      font-size: 14px;
    }
  }
  &__footer-row-content {
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    padding: 0 10px;
  }
  &__footer-row-number {
    color: #D62626;
    font-family: MontrealHeavy;
    font-size: 26px;
    line-height: 26px;
    @include mobile() {
      font-size: 18px;
      line-height: 18px;
    }
  }
  &__table {
    height: 210px;
  }
  &__scroll {
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
}

/* width */
::-webkit-scrollbar {
  width: 8px !important;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(214, 38, 38, 0.7) !important;
  border-radius: 10px !important;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: white !important;
  border-radius: 10px !important;
}
</style>
