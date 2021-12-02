<template>
  <v-app>
    <navigation></navigation>
    <v-main>
      <router-view></router-view>
      <router-view name="a"></router-view>
      <router-view name="b"></router-view>
    </v-main>
    <footer-app></footer-app>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: { Navigation, FooterApp },
  mounted() {
    this.$route.params[0] = ["hello", "world"];
    console.log(this.$route.params);
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
}

* {
  box-sizing: border-box;
}

.nav {
  display: flex;
  flex-direction: row;
}
</style>
