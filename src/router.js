import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Registration from "@/views/Registration";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: { layout: "default-layout" },
      component: Home
    },
    {
      path: "/about",
      name: "about",
      meta: { layout: "default-layout" },
      component: About
    },
    {
      path: "/registration",
      name: "registration",
      meta: { layout: "blank-layout" },
      component: Registration
    },
    {
      path: "*",
      meta: { layout: "default-layout" },
      component: Home
    }
  ]

  // [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: Home
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "./views/About.vue")
  //   }
  // ]
});
