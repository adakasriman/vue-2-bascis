import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import productContainer from '@/components/products/ProductContainer'
import ProductView from '@/components/product-view/ProductView.vue'
import Categories from '@/components/categories/Categories.vue'
import CategoryProducts from '@/components/categories/categories-products/CategoriesProducts';
import AddProductContainer from '@/components/add-product/AddProductContainer';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: productContainer
    },
    {
      path: '/products',
      name: 'products',
      component: productContainer
    },
    {
      path: '/products/categories',
      name: 'categories',
      component: Categories
    },
    {
      path: '/products/add',
      name: 'add',
      component: AddProductContainer
    },
    {
      path: '/products/:id',
      name: 'singe Product',
      component: ProductView
    }, {
      path: '/products/category/:category',
      name: 'category',
      component: CategoryProducts
    },
  ]
})
