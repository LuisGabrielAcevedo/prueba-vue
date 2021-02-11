<template>
  <div id="app">
    <div class="app__image-content">
    <img
      v-if="!login"
      class="app__image"
      src="@/assets/web/fondo.jpg"
    />
    <img
      v-if="login && !mobile"
      class="app__image"
      src="@/assets/web/fondo-ingresar.jpg"
    />
    <img
    v-if="login && mobile"
      class="app__image2"
      src="@/assets/mobile/fondo2.jpg"
    />
    </div>
    <div class="app__content">
      <div class="app__routes">
        <div class="app__box">
          <div class="app__scroll">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
    <Alert :show="show" @close="show = false" :data="alert" />
  </div>
</template>

<script>
import Alert from './components/Alert'
export default {
  name: 'App',
  components: {
    Alert
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.$store.dispatch("setMobile", window.innerWidth <= 940);
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      window.document.addEventListener(
        "touchmove",
        e => {
          if (e.scale !== 1) {
            e.preventDefault();
          }
        },
        { passive: false }
      );
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    login() {
      return this.$route.path === "/ingresar";
    },
    alert() {
      return this.$store.getters.alert;
    },
    mobile() {
      return this.$store.getters.mobile;
    },
  },
  methods: {
    onResize() {
      this.$store.dispatch("setMobile", window.innerWidth <= 940);
    },
    goTo(path) {
      if (this.$route.path !== `/${path}`) this.$router.push(path);
    },
  }, 
  data() {
    return {
      show: false
    };
  },
  watch: {
    alert() {
      this.show = true;
    }
  },
}
</script>


<style lang="scss">
.app {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(251,199, 2, 0.5);
  &__image-content {
    position: absolute;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0px;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: rgba(251,199, 2);
  }
  &__image {
    height: 100vh;
  }
  &__image2 {
    height: 100vh;
    width: 100%;
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
