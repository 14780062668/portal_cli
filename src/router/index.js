import Vue from "vue";
import VueRouter from "vue-router";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homePage",
    redirect: "/index",
    component: () => import("@/views/index/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/index",
    name: "Index",
    component: () => import("@/views/index/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/index_info",
    name: "index_info",
    component: () => import("@/views/index/Info.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/about_me",
    name: "about_me",
    component: () => import("@/views/aboutMe/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/product",
    name: "product",
    component: () => import("@/views/product/Index.vue"),
    meta: {
      keepAlive: false,
      name: "产品列表"
    }
  },
  {
    path: "/product_detail",
    name: "product_detail",
    component: () => import("@/views/product/Detail.vue"),
    meta: {
      keepAlive: false,
      name: "产品详情"
    }
  },
  {
    path: "/equipment",
    name: "equipment",
    component: () => import("@/views/equipment/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/quality_control",
    name: "quality_control",
    component: () => import("@/views/qualityControl/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/contact_us",
    name: "contact_us",
    component: () => import("@/views/contact/Index.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/edit",
    name: "edit",
    component: () => import("@/views/edit/Index.vue"),
    meta: {
      keepAlive: false
    }
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@/views/Demo.vue"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "*",
    name: "NoRoute",
    component: () => import("@/views/index/Index.vue"),
    meta: {
      keepAlive: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  //mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
});
//
router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});
router.afterEach(() => {
  Nprogress.done();
});

export default router;
