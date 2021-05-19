import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Person from './components/Person'

Vue.use(Router);





let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/people',
      name: 'Person',
      component: Person
    }
  ]
})

export default router;