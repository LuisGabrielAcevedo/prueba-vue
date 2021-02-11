<template>
  <div class="ranking">
    <div class="ranking__content">
      <Title text="RANKING"/>
      <div class="table">
        <div class="table__header">
          <span class="table__header-item">POS.</span>
          <span class="table__header-item">NOMBRE</span>
          <span class="table__header-item">CANT. CÓDIGOS</span>
        </div>
        <div class="table__data">
          <div class="table__data-row" v-for="(item, i) in data" :key="i">
            <span class="table__data-row-item">{{ item.position }}</span>
            <span class="table__data-row-item">{{item.name}}</span>
            <span class="table__data-row-item">{{8}}</span>
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
    user() {
      console.log(this.$store.getters.user)
      return this.$store.getters.user;
    }
  },
  methods: {
    getRanking() {
      Ranking().then(resp => {
        this.data = resp.data
      })
    }
  },
  data() {
    return {
      data: []
    };
  }
}
</script>

<style lang="scss">
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
}
</style>
