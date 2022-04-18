import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0caa329a = () => interopDefault(import('..\\pages\\member\\index.vue' /* webpackChunkName: "pages/member/index" */))
const _2dd679de = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _21ca27b7 = () => interopDefault(import('..\\pages\\Update.vue' /* webpackChunkName: "pages/Update" */))
const _0af39152 = () => interopDefault(import('..\\pages\\member\\_slug.vue' /* webpackChunkName: "pages/member/_slug" */))
const _c7d67218 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/member",
    component: _0caa329a,
    name: "member"
  }, {
    path: "/Register",
    component: _2dd679de,
    name: "Register"
  }, {
    path: "/Update",
    component: _21ca27b7,
    name: "Update"
  }, {
    path: "/member/:slug",
    component: _0af39152,
    name: "member-slug"
  }, {
    path: "/",
    component: _c7d67218,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
