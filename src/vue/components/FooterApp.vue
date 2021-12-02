<template>
  <v-footer color="primary">
    <v-row class="footer_row" justify="center">
      <router-link class="footer_link" v-for="link in links" :key="link.id" :to="link.path">{{
        link.text
      }}</router-link>
      <v-col class="primary text-center white--text" cols="12">
        2021 - Todo
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterApp",
  data() {
    return {
      links: [
        {
          id: 1,
          text: "Home",
          path: "/",
        },
        {
          id: 2,
          text: "About us",
          path: "/Today",
        },
        {
          id: 3,
          text: "Team",
          path: "/Upcoming",
        },
        {
          id: 4,
          text: "Services",
          path: "/Today",
        },
        {
          id: 5,
          text: "Blog",
          path: "/Upcoming",
        },
        {
          id: 6,
          text: "Contact us",
          path: "/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer_row {
  margin: 0;
}
.footer_link {
  padding: 20px 15px 0 15px;
  text-decoration: none;
  color: white;
}
</style>
