import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Page from '../views/Page.vue'

Vue.use(Router)

const multiroutes = {
  home: {
      en: '/',
      nl: '/nl',
      fr: '/fr'
  },
  pizza: {
      en: '/pizza-recipe',
      nl: '/nl/pizza-recept',
      fr: '/fr/pizza-recette'
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: multiroutes.home.en,
        name: 'Home',
        component: Home,
        alias: Object.values(multiroutes.home).splice(1),
        meta: multiroutes.home
    },

    {
        path: multiroutes.pizza.en,
        name: 'Pizza',
        component: Page,
        alias: Object.values(multiroutes.pizza).splice(1),
        meta: multiroutes.pizza
    },

    {
      path: '*',
      name: 'Other',
      component: Home
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
