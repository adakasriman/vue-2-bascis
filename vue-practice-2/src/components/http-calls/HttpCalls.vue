
<template>
  <div>
    <div v-for="item in apiData" :key="item.id">
      {{ item.description | upperCase }}
    </div>
  </div>
</template>


<script >
export default {
  data() {
    return {
      apiData: [],
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://fakestoreapi.com/products")
      .then((res) => (this.apiData = res.body));
  },
  filters: {}, //  we can filter in local using filter object
};
</script>

<style  scoped>
</style>
