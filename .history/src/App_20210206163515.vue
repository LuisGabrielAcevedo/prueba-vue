<template>
  <div id="app">
    <img
      v-if="!login && !mobile"
      class="app__image"
      src="@/assets/img/web/fondo.jpg"
    />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
