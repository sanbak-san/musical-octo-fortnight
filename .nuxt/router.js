import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a2f2370a = () => interopDefault(import('../pages/Category.vue' /* webpackChunkName: "pages/Category" */))
const _2763de7a = () => interopDefault(import('../pages/Checkout.vue' /* webpackChunkName: "" */))
const _81937d4c = () => interopDefault(import('../pages/Checkout/OrderReview.vue' /* webpackChunkName: "" */))
const _3e9d791a = () => interopDefault(import('../pages/Checkout/Payment.vue' /* webpackChunkName: "" */))
const _9fa8ce14 = () => interopDefault(import('../pages/Checkout/PersonalDetails.vue' /* webpackChunkName: "" */))
const _c4de1d6c = () => interopDefault(import('../pages/Checkout/Shipping.vue' /* webpackChunkName: "" */))
const _f1c2861e = () => interopDefault(import('../pages/Checkout/ThankYou.vue' /* webpackChunkName: "" */))
const _9c980348 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "" */))
const _4ee36498 = () => interopDefault(import('../pages/MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _028e6652 = () => interopDefault(import('../pages/MyAccount/BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _e214260a = () => interopDefault(import('../pages/MyAccount/LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _a8b4ef60 = () => interopDefault(import('../pages/MyAccount/MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _12051abc = () => interopDefault(import('../pages/MyAccount/MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _3e805414 = () => interopDefault(import('../pages/MyAccount/MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _f22aac9e = () => interopDefault(import('../pages/MyAccount/OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _01cc688e = () => interopDefault(import('../pages/MyAccount/ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _50ffbb82 = () => interopDefault(import('../pages/Product.vue' /* webpackChunkName: "pages/Product" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _a2f2370a,
    name: "Category___en"
  }, {
    path: "/checkout",
    component: _2763de7a,
    name: "checkout___en",
    children: [{
      path: "order-review",
      component: _81937d4c,
      name: "order-review___en"
    }, {
      path: "payment",
      component: _3e9d791a,
      name: "payment___en"
    }, {
      path: "personal-details",
      component: _9fa8ce14,
      name: "personal-details___en"
    }, {
      path: "shipping",
      component: _c4de1d6c,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _f1c2861e,
      name: "thank-you___en"
    }]
  }, {
    path: "/Checkout",
    component: _2763de7a,
    name: "Checkout___en",
    children: [{
      path: "OrderReview",
      component: _81937d4c,
      name: "Checkout-OrderReview___en"
    }, {
      path: "Payment",
      component: _3e9d791a,
      name: "Checkout-Payment___en"
    }, {
      path: "PersonalDetails",
      component: _9fa8ce14,
      name: "Checkout-PersonalDetails___en"
    }, {
      path: "Shipping",
      component: _c4de1d6c,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _f1c2861e,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/de",
    component: _9c980348,
    name: "home___de"
  }, {
    path: "/Home",
    component: _9c980348,
    name: "Home___en"
  }, {
    path: "/MyAccount",
    component: _4ee36498,
    name: "MyAccount___en",
    children: [{
      path: "BillingDetails",
      component: _028e6652,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _e214260a,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _a8b4ef60,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _12051abc,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _3e805414,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _f22aac9e,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _01cc688e,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/Product",
    component: _50ffbb82,
    name: "Product___en"
  }, {
    path: "/de/Category",
    component: _a2f2370a,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _2763de7a,
    name: "checkout___de",
    children: [{
      path: "order-review",
      component: _81937d4c,
      name: "order-review___de"
    }, {
      path: "payment",
      component: _3e9d791a,
      name: "payment___de"
    }, {
      path: "personal-details",
      component: _9fa8ce14,
      name: "personal-details___de"
    }, {
      path: "shipping",
      component: _c4de1d6c,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _f1c2861e,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _2763de7a,
    name: "Checkout___de",
    children: [{
      path: "OrderReview",
      component: _81937d4c,
      name: "Checkout-OrderReview___de"
    }, {
      path: "Payment",
      component: _3e9d791a,
      name: "Checkout-Payment___de"
    }, {
      path: "PersonalDetails",
      component: _9fa8ce14,
      name: "Checkout-PersonalDetails___de"
    }, {
      path: "Shipping",
      component: _c4de1d6c,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _f1c2861e,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _9c980348,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _4ee36498,
    name: "MyAccount___de",
    children: [{
      path: "BillingDetails",
      component: _028e6652,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _e214260a,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _a8b4ef60,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _12051abc,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _3e805414,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _f22aac9e,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _01cc688e,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Product",
    component: _50ffbb82,
    name: "Product___de"
  }, {
    path: "/de/my-account/:pageName?",
    component: _4ee36498,
    name: "my-account___de"
  }, {
    path: "/de/p/:id/:slug",
    component: _50ffbb82,
    name: "product___de"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _a2f2370a,
    name: "category___de"
  }, {
    path: "/my-account/:pageName?",
    component: _4ee36498,
    name: "my-account___en"
  }, {
    path: "/p/:id/:slug",
    component: _50ffbb82,
    name: "product___en"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _a2f2370a,
    name: "category___en"
  }, {
    path: "/",
    component: _9c980348,
    name: "home___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
