<template>
  <div class="myAccount">
    <div class="myAccount__content">
      <div class="myAccount__title">
        <Title text="MI CUENTA"/>
      </div>
      <div class="myAccount__description-content">
        <span class="myAccount__description">¡Bienvenido, <span class="myAccount__redDescription">{{name}}</span>!</span><br>
        <span class="myAccount__description">este es el estado de tu cuenta al momento:</span>
      </div>
      <div class="table">
        <div class="table__header">
          <span class="table__header-item">CANT.</span>
          <span class="table__header-item">CÓDIGO</span>
          <span class="table__header-item">FECHA</span>
          <span class="table__header-item">PREMIO</span>
        </div>
        <div class="table__data">
          <div class="table__data-row" v-for="(item, i) in data" :key="i">
            <span class="table__data-row-item">{{i + 1}}</span>
            <span class="table__data-row-item">{{item.code}}</span>
            <span class="table__data-row-item">{{formatDate(item.created_at)}}</span>
            <span class="table__data-row-item">{{item.result || '-'}}</span>
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
import Title from '../components/Title'
import {GetCodes} from '../api'
export default {
  name: 'MyAccount',
  components: {
    Title
  },
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
    margin-bottom: 20px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 0 40px 0;
    @include mobile() {
      width: 100%;
    }
  }
  &__description-content {
     @include mobile() {
      text-align: center;
     }
  }
  &__description {
     font-family: MontrealHeavy;
     font-size: 24px;
     line-height: 24px;
     @include mobile() {
       font-size: 18px;
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
    margin-right: 10px;
    @include mobile() {
    font-size: 20px;
    }
  }
  &__footer-row-content {
    background-color: white;
    border: 1px solid #D62626;
    padding: 0 30px;
    border-radius: 25px;
  }
  &__footer-row-number {
    color: #D62626;
    font-family: MontrealHeavy;
    font-size: 26px;
  }
}
</style>
