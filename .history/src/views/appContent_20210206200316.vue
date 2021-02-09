<template>
  <div class="app-content">
    <div class="app-content__content">
      <div class="app-content__routes">
        <div class="app-content__box">
          <div class="app-content__scroll">
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
