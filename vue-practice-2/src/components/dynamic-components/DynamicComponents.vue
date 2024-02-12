<template>
  <div>
    Dynamic components
    <component :is="component"></component>
    <!-- 
       -> Using component tag we can pass component dynamic.
       -> When ever your passing another component to "is" attribute, before component(state) could be destroyed.
       -> If you want alive before component, use "<keep-alive></keep-alive>" component 

       ex: <keep-alive>
              <component :is="component"></component> 
            </keep-alive>

     -->

    <button @click="componentChange('FormOne')">Show form One</button>
    <button @click="componentChange('FormTwo')">Show form One</button>
  </div>
</template>

<script >
import FormOne from "./FormOne.vue";
// import FormOne from "./FormOne.vue";
import FormTwo from "./FormTwo.vue";

export default {
  //   components: {
  //     "form-one": FormOne,
  //     "form-two": FormTwo,
  //   },
  data() {
    return {
      component: "FormOne",
    };
  },
  methods: {
    componentChange(component) {
      this.component = component;
    },
  },
  components: { FormTwo, FormOne },
};
</script>

<style>
</style>