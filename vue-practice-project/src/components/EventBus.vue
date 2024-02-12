<template>
  <div>
    <p>It is used to triger a function or pass data between components</p>
    <div>
      from parent
      <span>{{ name }}</span>
    </div>
  </div>
</template>
  <script>
import { bus } from "../main";
export default {
  props: ["name"],
//   props: {
//     name: {
//       type: String,
//       default: () => "defailt name",
//     },
//   },
  data: () => {
    return {};
  },
  methods: {},
  created() {
    bus.$on("changeTitle", (data) => {
      this.name = data;
    });
  },
};
</script>
<style  scoped>
span {
  background: pink;
  color: #000;
  font-size: 20px;
}
</style>
  