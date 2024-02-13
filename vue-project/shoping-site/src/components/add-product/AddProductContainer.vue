
<template>
  <add-product>
    <div class="add_products">
      <h3 class="text_center">Add Product</h3>

      <form @submit.prevent="onSubmit">
        <div class="fields">
          <div class="item">
            <label>Title</label>
            <input type="text" v-model="formData.title" name="title" required />
          </div>
          <div class="item">
            <label>Price</label>
            <input
              v-model="formData.price"
              type="number"
              name="price"
              required
            />
          </div>
          <div class="item">
            <label>brand</label>
            <input v-model="formData.brand" type="text" name="brand" required />
          </div>
          <div class="item">
            <label>Stock</label>
            <input
              v-model="formData.stock"
              type="number"
              name="stock"
              required
            />
          </div>
          <div class="item">
            <label>Rating</label>
            <input
              v-model="formData.rating"
              type="number"
              name="rating"
              required
            />
          </div>
          <div class="item">
            <label>Category</label>
            <input
              v-model="formData.category"
              type="text"
              name="category"
              required
            />
          </div>
          <div class="item">
            <label>Description</label>
            <textarea
              name="description"
              v-model="formData.description"
              required
            />
          </div>
        </div>
        <div class="add_button">
          <button type="submit" title="Add product">Add Product</button>
        </div>
      </form>
    </div>
  </add-product>
</template>


<script>
import AddProduct from "./AddProduct.vue";
export default {
  components: { AddProduct },
  data() {
    return {
      formData: {
        title: "",
        price: "",
        brand: "",
        stock: "",
        rating: "",
        category: "",
        description: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.formData);
      this.$http
        .post("https://dummyjson.com/products/add", {
          headers: { "Content-Type": "application/json" },
          data: this.formData,
        })
        .then((res) => {
          this.$router.push("/products");
          if (res) {
            this.formData["id"] = res.body.id
            sessionStorage.setItem("newProduct", JSON.stringify(this.formData));
          }
        });
    },
  },
};
</script>


<style scoped>
</style>
