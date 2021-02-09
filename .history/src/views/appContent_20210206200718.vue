<template>
  <div class="app-content">
    <div class="app-content__content">
      <div class="app-content__routes">
        <div class="app-content__box">
          <div class="app-content__scroll">
           
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
.app-content {
  &__box {
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__scroll {
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding-top: 60px;
  }
}
</style>
