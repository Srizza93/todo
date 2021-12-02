<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
    <v-toolbar-title class="navigation_title" v-for="button in buttons" :key="button.id">
      <router-link class="navigation_title_link" :to="button.path">{{ button.text }}</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      class="navigation_text-field"
      width="100"
      clearable
      dense
      label="Search for todo items"
    ></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      buttons: [
        {
          id: 1,
          text: "Inbox",
          path: "/",
        },
        {
          id: 2,
          text: "Today",
          path: "/Today",
        },
        {
          id: 3,
          text: "Upcoming",
          path: "/Upcoming",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navigation_title {
  margin: 0 20px;
}
.navigation_title_link {
  font-weight: 600;
  color: white;
  text-decoration: none;
}
.navigation_text-field {
  max-width: 250px;
  height: 40px;
  margin-top: auto;
}
</style>
