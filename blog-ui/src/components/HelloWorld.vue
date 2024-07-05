<template>
  <Banner/>
  <BodyBlogs/>
</template>

<script>
import Banner from './BodyContent/SiteBanner.vue'
import BodyBlogs from './BodyContent/BodyBlogs.vue'
export default {
  name: 'HelloWorld',
  components: {
    Banner,
    BodyBlogs,
  }
};
</script>

<style scoped>
/* Stil kodları buraya */
</style>
