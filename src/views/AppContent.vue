<template>
  <div class="app-content">
     <Header/>
     <div class="app-content__content">
       <div class="app-content__box">
         <div class="app-content__scroll" ref="div">
            <router-view/>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'AppContent',
  components: {Header},
  watch: {
    "$route.path": {
      handler: function() {
        if (this.$refs.div) {
          this.$refs.div.scrollTop = 0
        }
      },
      deep: true,
      immediate: true
    },
  }
}
</script>

<style lang="scss">
.app-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__content {
    flex: 1;
    position: relative;
  }
  &__box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__scroll {
    overflow-y: auto;
    max-height: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
