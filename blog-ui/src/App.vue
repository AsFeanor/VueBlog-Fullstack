<template>
  <HeaderLayout />
  <router-view></router-view>
  <FooterLayout />
</template>

<script>
import HeaderLayout from "@/Layouts/HeaderLayout.vue";
import FooterLayout from "@/Layouts/FooterLayout.vue";

export default {
  name: 'App',
  components: {HeaderLayout, FooterLayout},
}
</script>

<style>
#app {
  width: 100%;
}
</style>
