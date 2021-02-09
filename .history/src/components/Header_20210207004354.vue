<template>
  <div class="header">
    <div class="header__content">
      <img
      class="header__image"
      src="@/assets/web/preview-logo.png"
     />
     <i class="fas fa-bars header__menu-icon"  v-if="this.mobile" @click="toggle()"></i>
          <div class="header__web-routes" v-if="!this.mobile">
            <div v-for="(route, k) in webRoutes" :key="k">
            <div 
              v-if="route.isVisible()" 
              class="header__web-route"
              :class="{
                  'header--web-route-selected':
                    route.path === selectedRoute
                }"
              >
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
    <v-navigation-drawer
      class="header__drawer"
      v-model="drawer"
      absolute
      temporary
      right
      width="100%"
    >
    <div class="drawer__container">
      <div class="drawer__section-1"></div>
      <div class="drawer__section-2">
        <div class="drawer__close-icon-container">
          <i class="fas fa-times drawer__close-icon" @click="toggle()"></i>
        </div>
      </div>
      <div class="drawer__section-3">
      </div>
    </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data: () => ({
    drawer: true,
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
    },
    mobile(old) {
      if (!old) this.drawer = false
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
        path: "/registrarse",
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
    },
    webRoutes() {
      return this.routes.filter(r => r.isVisible())
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
    click(item) {
      if (item.clickAction) {
        item.clickAction();
      } else {
        this.goTo(item.path);
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/mixins.scss";
.header {
    padding: 120px;
    padding-top: 30px;
    padding-bottom: 0;
    @include mobile {
      padding: 0;
    }
    &__content { 
        height: 90px;
        background: #D62626 0% 0% no-repeat padding-box;
        border-radius: 24px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 24px;
        @include mobile {
          border-radius: 0;
          height: 80px;
        }
    }
    &__image{
      height: 46px;
      margin-right: 20px;
    }
    &__menu-icon {
      color: white;
      font-size: 40px;
      cursor: pointer;
    }
    &__web-routes {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__web-route {
      border-radius: 10px;
      padding: 2px 10px;
      cursor: pointer;
    }
    &--web-route-selected {
      background-color: white;
    }
    &__web-route-text {
      font-family: MontrealBold;
      color: white;
    }
    &--web-route-text-selected {
      color: #D62626;
    }
}

.drawer {
  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  &__section-1 {
    background-color: #f31c14;
    height: 30px;
  }
  &__section-2 {
    flex: 1;
    background-color: #D62626;
    display: flex;
    flex-direction: column;
    
  }
  &__section-3 {
    background-color: #c4140c;
    height: 30px;
  }
  &__close-icon {
    color: white;
    cursor: pointer;
  }
  &__close-icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 24px;
    font-size: 26px;
    margin-top: -10px;
  }
}

</style>
