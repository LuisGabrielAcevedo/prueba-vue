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
        name: "PREMIOS",
        path: "/premios",
        isVisible: () => true
      },
      



      {
        name: "Palabra Clave",
        path: "/palabra-clave",
        isVisible: () => this.token
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
