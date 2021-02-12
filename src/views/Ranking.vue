<template>
  <div class="ranking">
    <div class="ranking__content">
      <Title text="RANKING"/>
      <div class="ranking__date-content" >
        <span class="ranking__date">Acumulado parcial: {{t}}</span>
      </div>
      <div class="table">
        <div class="table__header">
          <span class="table__header-item">POS.</span>
          <span class="table__header-item">NOMBRE</span>
          <span class="table__header-item">CANT. CÓDIGOS</span>
        </div>
        <div class="table__data">
          <div class="table__data-row" v-for="(item, i) in data" :key="i"                 :class="{
            'table__data-row--selected':
              item.current
            }">
            <span class="table__data-row-item">{{ item.position }}</span>
            <span class="table__data-row-item">{{item.name}}</span>
            <span class="table__data-row-item">{{item.total_codes}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Ranking} from '../api'
import Title from '../components/Title'
export default {
  name: 'Ranking',
  components: {
    Title
  },
  mounted() {
    this.getRanking()
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
    t() {
      return this.time ? this.time.split(' ')[1] : ''
    },
    user() {
      console.log(this.$store.getters.user)
      return this.$store.getters.user;
    }
  },
  methods: {
    getRanking() {
      Ranking().then(resp => {
        this.data = resp.data
        this.time = resp.date
      })
    }
  },
  data() {
    return {
      data: [], time: null
    };
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.ranking {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(251,199, 2, 0.5);
    box-shadow: 7px 7px 7px #00000059;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 20px 0 40px 0;
  }
  &__date {
    color: #D62626;
    font-family: MontrealBold;
    font-size: 14px;
  }
  &__date-content {
    background-color: white;
    border: 1px solid #D62626;
    border-radius: 25px;
    padding: 4px 20px;
    margin-top: 20px;
  }
}
</style>
