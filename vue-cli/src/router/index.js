import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main'
import Person from '../components/person'
import User from '../components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/person',
      name: 'Person',
      component: Person,
      children: [
        {
          path: 'user',
          name: 'User',
          component: User
        }
      ]
    }
  ]
})