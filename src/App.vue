<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      cart: { items: [], total: 0, qty: 0 }
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {}
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
