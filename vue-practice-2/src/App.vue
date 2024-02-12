<template>
  <div id="app">
    <!-- <Slots /> -->
    <!-- <dynamic-components></dynamic-components> -->
    <router-view />


    <!-- <h3 v-rainbow="color">Custom directive</h3> -->
    <!-- <http-calls /> -->
  </div>
</template>

<script>
import DynamicComponents from "./components/dynamic-components/DynamicComponents.vue";
import HttpCalls from "./components/http-calls/HttpCalls.vue";
import Slots from "./components/slots/Slots.vue";

export default {
  name: "App",
  components: { Slots, DynamicComponents, HttpCalls },
  data(){
    return{
      color:"ccc"
    }

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
