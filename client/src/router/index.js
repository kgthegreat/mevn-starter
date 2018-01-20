import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Targets from '@/components/Targets'
import NewTarget from '@/components/NewTarget'
import EditTarget from '@/components/EditTarget'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/targets',
      name: 'Targets',
      component: Targets
    },
    {
      path: '/targets/new',
      name: 'NewTarget',
      component: NewTarget
    },
    {
      path: '/targets/:id',
      name: 'EditTarget',
      component: EditTarget
    }
  ]
})
