<template>
  <div>
    <h2>Hi {{ name }}</h2>
    <button @click="changeTitleLoacal">change title</button>
  </div>
</template>
<script>
import { bus } from "../main";

export default {
  props: {
    name: {
      type: String,
      default: () => "Deault title",
    },
  },
  data: () => {
    return {};
  },
  methods: {
    greeting() {
      return "Hi Adaka";
    },
    changeTitleLoacal() {
      // local function
      // this.$emit("changeTitle", "Nagaraju");
      // parent function and id used to triger a action(function) or pass data. chaid component to parent component
      // bus event
      // debugger;
      this.name = "nagaraju";
      bus.$emit("changeTitle", "Nagaraju");
      debugger;
    },
  },
};
</script>
<style  scoped>
/* scoped : local */
ul {
  list-style-type: none;
}
</style>
<!-- If you want to you this component you need must to import globlly(main.js) or localy -->
