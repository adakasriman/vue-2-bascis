

<template>
  <div>
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="!loading" class="product_view">
      <div>
        <div class="display_flex bg_color">
          <div>
            <!-- <vue-image-slider :images="productsData.images" /> -->
          </div>
          <div class="p_15 product_content">
            <div class="p_10 pt_0">
              <div class="product_title">
                {{ productsData.title }}
              </div>
              <div class="displayFlex_spacebetween pt_20">
                <div class="rating">
                  {{ productsData.rating }}
                  <span>
                    <i class="fa-sharp fa-solid fa-star"></i>
                  </span>
                </div>
                <div class="stock_count">
                  stocks <span> {{ productsData.stock }}</span>
                </div>
              </div>
              <div class="mt_10">
                <div class="mt_10 fw_6">Special Price</div>
                <div class="displayFlex_center gap_15 price mt_10">
                  <div>
                    <i class="fa-solid fa-indian-rupee-sign"></i
                    >{{ productsData.price }}
                  </div>
                  <span class="line_through">{{
                    productsData.price + 100
                  }}</span>
                  <div class="discountPercentage">
                    {{ productsData.discountPercentage }}% off
                  </div>
                </div>
              </div>

              <div>
                <div class="mt_10 fw_6">description</div>
                <div class="mt_10">{{ productsData.description }}</div>
              </div>
            </div>
            <div class="cartAndAdd_btn">
              <router-link to="/products"
                ><button type="button" title="Back to Products">Back to products</button
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import VueImageSlider from "vue-image-slider";
export default {
  components: {
    VueImageSlider,
  },
  data() {
    return {
      loading: true,
      productsData: {},
    };
  },
  created() {
    // Access the dynamic parameter in the created hook
    const dynamicId = this.$route.params.id;
    this.$http.get("https://dummyjson.com/products").then((res) => {
      this.loading = false;
      this.productsData = res.data.products.find(
        (item) => item.id == dynamicId
      );
      

    });
  },
};
</script>

<style scoped>
</style>
