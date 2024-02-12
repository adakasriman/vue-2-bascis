<script>
export default {
  data() {
    return {
        id:this.$route.params
    };
  },
  created(){
    console.log(this.id);
  }
};
</script>

<template>
    <div>{{ id }}</div>
</template>

<style lang="postcss" scoped>
</style>
