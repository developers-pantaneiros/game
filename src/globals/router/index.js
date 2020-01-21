import Vue from 'vue'
import VueRouter from 'vue-router'

import Greetings from '@/views/external/greetings/Greetings.vue'
import Signin from '@/views/external/signin/Signin.vue'
import Signup from '@/views/external/signup/Signup.vue'
import Game from '@/commons/components/Game.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'greetings',
    component: Greetings
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
