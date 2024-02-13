

<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="!loading" class="categories">
      <div v-for="category in categories" :key="category" class="item">
        <router-link :to="'/products/category/' + category">
          {{ category }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      categories: {},
    };
  },
  created() {
    // Access the dynamic parameter in the created hook

    this.$http.get("https://dummyjson.com/products/categories").then((res) => {
      this.loading = false;
      this.categories = res.data;

    //   console.log("this.productsData", this.categories);
    });
  },
};
</script>

<style  scoped>
.categories {
  margin-top: 20px;
}
</style>
