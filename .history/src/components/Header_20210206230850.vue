<template>
  <div class="header">
    <div class="header__content">
      <img
      class="header__image"
      src="@/assets/web/preview-logo.png"
     />
     <          <div v-for="(route, k) in routes" :key="k">
            <div v-if="route.isVisible()" class="header__web-route">
              <span
                class="header__web-route-text"
                @click="click(route)"
                :class="{
                  'header--web-route-text-selected':
                    route.path === selectedRoute
                }"
                >{{ route.name }}
              </span>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data: () => ({
    drawer: false,
    routes: [],
    selectedRoute: ""
  }),
  watch: {
    "$route.path": {
      handler: function(path) {
        this.selectedRoute = path;
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.routes = [
      {
        name: "INGRESAR",
        path: "/ingresar",
        isVisible: () => !this.token
      },
      {
        name: "REGÍSTRATE",
        path: "/ingresar",
        isVisible: () => !this.token
      },
      {
        name: "¿CÓMO PARTICIPAR?",
        path: "/como-particiar",
        isVisible: () => true
      },
      {
        name: "PREMIOS",
        path: "/premios",
        isVisible: () => true
      },
      {
        name: this.token ? 'TERM. Y COND.' : "TÉRMINOS Y CONDICIONES",
        path: "/terminos-y-condiciones",
        isVisible: () => true
      },
      {
        name: "INGRESAR CÓDIGO",
        path: "/ingresar-codigo",
        isVisible: () => this.token
      },
      {
        name: "RANKING",
        path: "/ranking",
        isVisible: () => this.token
      },
      {
        name: "CONTÁCTENOS",
        path: "/contactenos",
        isVisible: () => this.token
      },
      {
        name: "Mi Cuenta",
        path: "/mi-cuenta",
        isVisible: () => this.token
      }
    ];
  },
  computed: {
    mobile() {
      return this.$store.getters.mobile;
    },
    token() {
      return this.$store.getters.token;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.goTo("/ingresar");
    },
    logoClick() {
     
    },
    toggle() {
      this.drawer = !this.drawer;
    },
    goTo(path) {
      if (this.$route.path !== `${path}`) this.$router.push(path);
    },
  }
};
</script>

<style lang="scss">
.header {
    padding: 120px;
    padding-top: 30px;
    padding-bottom: 0;
    &__content { 
        height: 90px;
        background: #D62626 0% 0% no-repeat padding-box;
        border-radius: 24px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
    }
    &__image{
      height: 46px;
    }
}
</style>
