<template>
  <div class="header">
    <div v-if="token && !mobile" class="header__closeContainer-area">
      <div class="header__closeContainer" @click="logout()">
        <span class="header__closeText">CERRAR SESIÓN</span>
      </div>
    </div>
    <div class="header__column">
      <div class="header__section-1">
      </div>
      <div class="header__content">
      <img
        @click="logoClick()"
        class="header__image"
        src="@/assets/web/logo-blanco.png"
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
      <div class="header__section-2">
      </div>
    </div>
    <v-navigation-drawer
      class="header__drawer"
      v-model="drawer"
      absolute
      temporary
      width="100%"
    >
    <div class="drawer__container">
      <div class="drawer__section-1"></div>
      <div class="drawer__section-2">
        <div class="drawer__close-icon-container">
          <i class="fas fa-times drawer__close-icon" @click="toggle()"></i>
        </div>
        <img
      class="drawer__image"
      src="@/assets/web/logo-blanco.png"
     />
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
        name: "INGRESAR CÓDIGO",
        path: "/ingresar-codigo",
        isVisible: () => this.token
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
        name: "RANKING",
        path: "/ranking",
        isVisible: () => this.token
      },
      {
        name: this.token ? "TERM. Y COND." : "TÉRMINOS Y CONDICIONES",
        path: "/terminos-y-condiciones",
        isVisible: () => true
      },
      {
        name: "CONTÁCTENOS",
        path: "/contactenos",
        isVisible: () => this.token
      },
      {
        name: "MI CUENTA",
        path: "/mi-cuenta",
        isVisible: () => this.token
      },
      {
        name: "CERRAR SESIÓN",
        clickAction: () => {this.logout()},
        isVisible: () => this.token && this.mobile
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
      this.token ? this.goTo("/ingresar-codigo"): this.goTo("/ingresar");
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
    display: flex;
    justify-content: center;
    padding: 120px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 0;
    @include tablet() {
      padding: 20px;
      padding-top: 30px;
      padding-bottom: 0;
    }
    @include mobile() {
      padding: 0;
    }
    &__column {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      border-radius: 24px;
      overflow: hidden;
      min-width: 1150px;
      @include tablet() {
        min-width: 100%;
      }
      @include mobile() {
        border-radius: 0;
        padding: 0;
      }
    }
    &__section-1 {
      background-color: #f31c14;
      height: 4px;
      width: 100%;
    }
    &__section-2 {
      background-color: #c4140c;
      height: 4px;
      width: 100%;
    }
    &__content {
      background: #D62626;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      height: 78px;
      width: 100%;
      @include mobile() {
        height: 64px;
      }
    }
    &__closeContainer-area {
      position: absolute;
      display: flex;
      justify-content: flex-end;
      top: 126px;
      min-width: 1150px;
      padding-right: 24px;
      @include tablet {
        min-width: 100%;
      }
    }
    &__closeContainer {
      background-color: #D62626;
      border-radius: 25px;
      padding: 6px 10px;
      cursor: pointer;
      z-index: 2;
      display: flex;
      align-items: center;
      @include tablet() {
        right: 24px;
      }
    }
    &__closeText {
      color: white;
      font-family: MontrealBold;
      font-size: 10px;
    }
    &__image{
      cursor: pointer;
      height: 46px;
      margin-right: 20px;
      @include mobile() {
        height: 42px;
      }
    }
    &__menu-icon {
      color: white;
      font-size: 38px;
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
      text-align: center;
      @include mobile() {
        margin-bottom: 20px;
      }
      @include xs() {
        margin-bottom: 10px;
      }
    }
    &--web-route-selected {
      background-color: white;
    }
    &__web-route-text {
      font-family: MontrealBold;
      font-size: 16px;
      color: white;
      @include tablet() {
        font-size: 14px !important;
      }
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
    align-items: center;
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
    width: 100%;
  }
  &__image {
    height: 50px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
}

</style>
