// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource);

// Custom Directives
Vue.directive("rainbow", { // rainbow(directive name), {} is functionality of directive
  bind(el, binding, vnode) {  // el : element , binding : event values or directive, vnode : DOM node event
    console.log(binding, el, vnode);
    el.style.color = `#${binding.value}`
  }
})

Vue.directive("theme", { // rainbow(directive name), {} is functionality of directive
  bind(el, binding, vnode) {  // el : element , binding : event values or directive, vnode : DOM node event
    console.log(binding, el, vnode);
    el.style.color = `#${binding.expression}`

    // <h3 v-rainbow:column="color">Custom directive</h3>
    // binding.arg have column

  }
})


// Filters

Vue.filter("upperCase", function (value) {
  return value = value.toUpperCase();
}
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
