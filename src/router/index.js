import Vue from "vue";
import VueRouter from "vue-router";
const Inbox = () =>
  import(/* webpackChunkName: "group-inbox" */ "../views/Inbox.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inbox",
    component: Inbox,
  },
  {
    path: "/today",
    name: "Today",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Today.vue"),
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Upcoming.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
