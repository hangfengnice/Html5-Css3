import Home from "../views/Home.vue";

export default [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/101-html",
    name: "html",
    component: () => import('../views/html/html101.vue')
  },
  {
    path: "/201-link-import",
    name: "link-import",
    component: () => import("../views/css/201-link-@import.vue")
  },
  {
    path: "/202-transition",
    name: "transition",
    component: () => import("../views/css/202-transition.vue")
  },
  {
    path: "/203-animation",
    name: "animation",
    component: () => import("../views/css/203-animation.vue")
  },
  {
    path: "/601-browsers",
    name: "browsers",
    component: () => import("../views/browser/601browsers.vue")
  },
  {
    path: "/701-vuex",
    name: "vuex",
    component: () => import("../views/vue/701-vuex.vue")
  },
  {
    path: "/702-vue-router",
    name: "vue-router",
    component: () => import("../views/vue/702-vue-router.vue")
  },
  {
    path: "/90101-problem",
    name: "problem",
    component: () => import("../views/problem/90101-problem.vue")
  },
  
];
