<template>
  <div class="app-content">
     <Header/>
     <div class="app-content__content">
       <div class="app-content__box">
         <div class="app-content__content">
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
  components: {Header}
}
</script>

<style lang="scss">
.app-content {
  height: 100%;
  background-color: blue;
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
    width: 100%;
    max-height: 100%;
    height: 100%;
  }
}
</style>
