<template>
  <div class="app-content">
     
     <router-view/>
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
}
</style>
