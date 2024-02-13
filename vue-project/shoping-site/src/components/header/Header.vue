<!-- Header.vue -->
<template>
  <header class="header">
    <div class="displayFlex_center dupicate-head">
      <!-- <i class="fa-regular fa-shop"></i> -->
      <a class="project_title">MY SHOPE</a>
    </div>
    <div class="displayFlex_spacebetween">
      <div class="displayFlex_center title">
        <router-link to="/">
          <i class="fa-regular fa-shop"></i>
          <a class="project_title">MY SHOPE</a>
        </router-link>
      </div>
      <form action="" onSubmit="{searchEvent}">
        <div class="search_btn">
          <input
            type="text"
            v-model="searchData"
            name=""
            id=""
            placeholder="search product"
          />
          <span>
            <button
              type="submit"
              title=""
              iTagclass="fa-solid fa-magnifying-glass"
            ></button>
          </span>
        </div>
      </form>

      <div class="displayFlex_center">
        <div class="displayFlex_center gap_10">
          <button class="Catgories_btn"><router-link to="/products/categories">Catgories</router-link></button>

          <button><router-link to="/products/add">Add</router-link></button>
  
        </div>
      </div>
    </div>
  </header>
</template>
  
  <script>
export default {
  data() {
    return {
      title: "My Vue 2.9.6 App",
      searchData: "",
    };
  },
  methods: {
    backToProducts: () => {
      //   navigate(`/products`);
      this.$router.push("/products");
    },
  },
  created() {
    // this.$route
    // console.log("this.$route", this.$route);
    // console.log("this.$router", this.$router);
    // // console.log(this.$router);
  },
};
</script>
  
  <style scoped>
  a {
  text-decoration: none;
  color: inherit;
}
</style>
  