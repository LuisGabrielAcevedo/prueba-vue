<template>
  <div class="header">
    <div class="header__content">

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
        name: "Iniciar Sesión",
        path: "/ingresar",
        isVisible: () => !this.token
      },
      {
        name: "Palabra Clave",
        path: "/palabra-clave",
        isVisible: () => this.token
      },
      {
        name: "Cómo Participar",
        path: "/como-participar",
        isVisible: () => true
      },
      {
        name: "Términos y Cond.",
        path: "",
        click: () => {
          this.$store.dispatch("setTermsAndConditions", true);
        },
        isVisible: () => this.mobile
      },
      {
        name: "Términos y Condiciones",
        path: "",
        click: () => {
          this.$store.dispatch("setTermsAndConditions", true);
        },
        isVisible: () => !this.token && !this.mobile
      },
      {
        name: "Premio",
        path: "/premios",
        isVisible: () => true
      },
      {
        name: "Contáctenos",
        path: "/contactenos",
        isVisible: () => this.token && this.mobile
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
    showLogo() {
      return true;
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
    openLink() {
      window.open("https://www.canalrcn.com/", "_blank");
    },
    logo() {
      this.token ? this.goTo("/palabra-clave") : this.goTo("/ingresar");
    },
    toggle() {
      this.drawer = !this.drawer;
    },
    goTo(path) {
      if (this.$route.path !== `${path}`) this.$router.push(path);
    },
    click(item) {
      if (item.click) {
        item.click();
      } else {
        this.goTo(item.path);
      }
    }
  }
};
</script>

<style lang="scss">
.header {
    padding: 120px;
    padding-top: 20px;
    padding-bottom: 0;
    &__content { 
        height: 90px;
        background: #D62626 0% 0% no-repeat padding-box;
        border-radius: 33px;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
