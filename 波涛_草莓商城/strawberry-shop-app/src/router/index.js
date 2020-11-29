import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/List.vue"),
  },
  {
    path: "/carts",
    name: "Carts",
    component: () => import("../views/Carts.vue"),
  },
  {
    path: "/me",
    name: "Me",
    component: () => import("../views/Me.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      showNav: true,
    },
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import("../views/Reg.vue"),
    meta: {
      showNav: true,
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/Product.vue"),
    meta: {
      showNav: true,
    },
  },
  {
    path: "/*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name == "Login" || to.name == "Reg") {
    next();
  } else {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  }
});

export default router;
