import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/route-components/Home'
import About from '../components/route-components/About'
import Projects from '../components/route-components/Projects'
import Contact from '../components/route-components/Contact'
import Blog from '../components/route-components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
      path: '/about',
      name: '',
      component: About
    }, {
      path: '/projects',
      name: '',
      component: Projects
    }, {
      path: '/contact',
      name: '',
      component: Contact
    }, {
      path: '/blog/:id',
      name: '',
      component: Blog
    }
  ]
})
