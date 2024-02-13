<script >
export default {
  props:{
    singleProduct :{
        type: Object,
        default : {}
    }
  },
  data() {
    return {};
  },

};
</script>

<template>
  <div>
    <router-link :to='"/products/"+singleProduct.id'>
      <img :src="singleProduct.thumbnail" alt="product Img" />
      <div class="p_10 pt_0">
        <div class="product_title">{{singleProduct.title}}</div>
        <div class="displayFlex_spacebetween">
          <div class="rating">
            {{singleProduct.rating}}
            <span>
              <i class="fa-sharp fa-solid fa-star"></i>
            </span>
          </div>
          <div class="stock_count">
            stocks <span> {{singleProduct.stock}}</span>
          </div>
        </div>
        <div class="displayFlex_center gap_15 price">
          <div>
            <i class="fa-solid fa-indian-rupee-sign"></i>{{singleProduct.price}}
          </div>
          <span class="line_through">{{singleProduct.price + 100}}</span>
          <div class="discountPercentage">
            {{singleProduct.discountPercentage}}% off
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style  scoped>
</style>
