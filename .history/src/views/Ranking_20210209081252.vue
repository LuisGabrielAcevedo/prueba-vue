<template>
  <div class="ranking">
    <div class="ranking__content">
      <Title text="RANKING"/>
      <div class="table">
        <div class="table__header">
          <span class="table__header-item">POS.</span>
          <span class="table__header-item">CÓDIGO</span>
          <span class="table__header-item">FECHA</span>
          <span class="table__header-item">PREMIO</span>
        </div>
        <div class="table__data">
          <div class="table__data-row" v-for="(item, i) in data" :key="i">
            <span class="table__data-row-item">{{ i + 1 }}</span>
            <span class="table__data-row-item">{{item.code}}</span>
            <span class="table__data-row-item">{{item.date}}</span>
            <span class="table__data-row-item">{{item.award}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
export default {
  name: 'Ranking',
  components: {
    Title
  },
  data() {
    return {
      data: [
        {
          id: 1,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        },
        {
          id: 2,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        },
        {
          id: 3,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        },
        {
          id: 4,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        },
        {
          id: 5,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        },
        {
          id: 6,
          code: "A1BCD23E4",
          date: "21-09-2020",
          award: "Recarga"
        }
      ]
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
