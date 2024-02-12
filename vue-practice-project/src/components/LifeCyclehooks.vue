<template>
  <div>
    <h5>methods :</h5>
    <p>name: {{ name }}</p>
    <button @click="changename">change name</button>
    <ol>
      <li>beforeCreate()</li>
      <li>created()</li>
      <li>beforeMount()</li>
      <li>mounted()</li>
      <li>beforeUpdate()</li>
      <li>updated</li>
      <li>beforeDestroy</li>
    </ol>
    <div></div>
  </div>
</template>
  <script>
import { bus } from "../main";

export default {
  data: () => {
    return {
      name: "adaka",
    };
  },
  methods: {
    changename() {
      this.name = "name is changes";
    },
  },
  //   beforeCreate() { //it calls before component is created
  //     alert("beforeCreate");
  //   },
  //   created() { //it calls after component is created
  //     alert("created");
  //   },
  //   beforeMount() {  //it calls before component is render
  //     alert("beforeMount");
  //   },
  //   mounted() { //it calls after component is render
  //     alert("mounted");
  //   },
  beforeUpdate() {
       // it calls before any changes happen in component
    alert("beforeUpdate");
  },
  updated() {
    // it calls any changes happen in component
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
};
</script>
  <style  scoped>
/* scoped : local */
</style>
  