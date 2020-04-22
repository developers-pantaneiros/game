import Vue from 'vue'
import VueRouter from 'vue-router'

import external from './routes/external'
import student from './routes/student'
import teacher from './routes/teacher'
import exercises from './routes/exercises'

Vue.use(VueRouter)

const routes = [...external, ...student, ...teacher, ...exercises]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
