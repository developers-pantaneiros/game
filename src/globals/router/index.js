import Vue from 'vue'
import VueRouter from 'vue-router'

import external from './routes/external'
import student from './routes/student'
import teacher from './routes/teacher'

Vue.use(VueRouter)

const routes = [...external, ...student, ...teacher]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
