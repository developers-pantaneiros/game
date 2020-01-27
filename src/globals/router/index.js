import Vue from 'vue'
import VueRouter from 'vue-router'

import external from './routes/external'
import student from './routes/student'
import teacher from './routes/teacher'

import conditions from './conditions'

Vue.use(VueRouter)

const routes = [...external, ...student, ...teacher]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => conditions(to, from, next))

export default router
