<template>
  <div>
    <h2>List of Name</h2>
    <ul>
      <li v-for="user in userList" :key="user.id">
        <div>name: {{ user.name }}</div>
        Role : {{ user.role }}
      </li>
    </ul>
  </div>
</template>
  <script>
export default {
  props: {
    userList: {
      type: Array,
      default: () => [], // Here passing empty array when userList prop is not coming from the parent
    },

  }, // props data in array, userList is parent data
  data: () => {
    return {};
  },
  methods: {
    greeting: () => {
      return "Hi Sriman";
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
  