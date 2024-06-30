<template>

  <Header-layout />
  <router-view></router-view>
  <FooterLayout />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: #FAF8FF;
}

#app {
  width: 100%;
}

</style>
