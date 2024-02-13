<script >
import Product from "./Product.vue";
export default {
  components: { Product },
  data() {
    return {
      title: "My Vue 2.9.6 App",
      searchData: "",
      loading: true,
      productsData: {},
    };
  },
  methods: {
    backToProducts: () => {
      //   navigate(`/products`);
    },
  },
  created() {
    this.$http.get("https://dummyjson.com/products").then((res) => {
      this.loading = false;
      this.productsData = res.data;
      let newProduct = JSON.parse(sessionStorage.getItem("newProduct"));
      if (newProduct && this.productsData.products.find((item) => item.id != newProduct.id)) {
        if (this.productsData.products.find((item) => item.id == newProduct.id)) {
           sessionStorage.removeItem("newProduct");
        } else {
          console.log(this.productsData.products);
          console.log(newProduct);
          this.productsData.products.unshift(newProduct);
        }
      }
    });
  },
};
</script>

<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>
    <div class="filters">
      <!-- <Filters getFilterData={(filtersData: ApiDataObject) =>
      getFilterData(filtersData)} /> -->
    </div>
    <div v-if="!loading" class="products">
      <div
        v-for="product in productsData.products"
        :key="product.id"
        class="product"
      >
        <router-link to="/">
          <!-- {{ product }} -->
          <!-- <div v-if="!product?.isDeleted"> -->
          <product :singleProduct="product"></product>
        </router-link>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
