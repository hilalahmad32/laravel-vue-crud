import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddData from '../views/AddData.vue'
import EditData from '../views/EditData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-data',
    name: 'add-data',
    component: AddData
  },
  {
    path: '/edit-data/:id',
    name: 'edit-data',
    component: EditData
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
