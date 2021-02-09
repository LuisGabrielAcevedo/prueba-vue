<template>
  <div class="app-content">
    <div class="app__content">
      <div class="app__routes">
        <div class="app__box">
          <div class="app__scroll">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
}
</script>

<style lang="scss">
.app-content {}
</style>
