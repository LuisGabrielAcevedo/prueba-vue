<template>
  <div id="app">
    <img
    v-if="!login"
      class="app__image"
      src="@/assets/web/fondo.jpg"
    />
    <img
    v-if="login"
      class="app__image"
      src="@/assets/web/fondo-ingresar.jpg"
    />
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
  name: 'App',
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.$store.dispatch("setMobile", window.innerWidth <= 940);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    login() {
      return this.$route.path === "/ingresar";
    },
  },
  methods: {
    onResize() {
      this.$store.dispatch("setMobile", window.innerWidth <= 940);
    }
  }
}
</script>


<style lang="scss">
.app {
  position: fixed;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &__image {
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 110%;
    z-index: 1;
  }
  &__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  &__routes {
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
