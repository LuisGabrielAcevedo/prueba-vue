<template>
  <div class="app-content">

     <router-view/>
  </div>
</template>

<script>
import Header from '../components'
export default {
  name: 'AppContent',
}
</script>

<style lang="scss">
.app-content {
height: 100%;
}
</style>
