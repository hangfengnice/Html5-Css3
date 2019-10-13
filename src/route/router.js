import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/css3",
    name: "css3",
    component: () => import("../views/css3.vue")
  },
  {
    path: "/browser",
    name: "browser",
    component: () => import("../views/browser.vue")
  },
  {
    path: "/problem",
    name: "problem",
    component: () => import("../views/problem.vue")
  },
  {
    path: "/different",
    name: "different",
    component: () => import("../views/different.vue")
  }
];
