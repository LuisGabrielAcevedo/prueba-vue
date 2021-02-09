<template>
  <div id="app">
    <img
      class="app__image"
      src="@/assets/web/fondo.jpg"
    />
    <router-view/>
  </div>
</template>

<style lang="scss">
.app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
}
</style>
