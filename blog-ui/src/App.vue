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
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

</style>
