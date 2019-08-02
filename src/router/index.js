import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Form'
import Form3 from '@/pages/Form3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: Form
    },
    {
      path: '/form3',
      name: 'form3',
      component: Form3
    }

  ]
})
