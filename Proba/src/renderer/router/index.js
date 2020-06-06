import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: require('@/components/Home').default
    },
    {
      path: '/practice',
      name: 'extra-page',
      component: require('@/components/Practice').default
    },
    {
      path: '/tests',
      name: 'tests',
      component: require('@/components/Tests').default
    },
    {
      path: '/extra',
      name: 'extra-page',
      component: require('@/components/Extra').default
    },
    {
      path: '/landingPage',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
