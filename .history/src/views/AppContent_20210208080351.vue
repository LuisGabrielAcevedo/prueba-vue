<template>
  <div class="app-content">
     <Header/>
     <div class="app-content">
       <router-view/>
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
  }
}
</style>
