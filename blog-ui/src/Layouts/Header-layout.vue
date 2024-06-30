<template>
        <nav :class="{navbar_default: isAbcClassActive}" class="navbar navbar-dark  fixed-top">
  <div class="container">
    <router-link class="navbar-brand" to="/"><span class="nav_brand">Blog</span></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Blog</h5>
        <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Anasayfa</router-link>
          </li>
          
        </ul>
      
      </div>
    </div>
  </div>
</nav>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const isAbcClassActive = ref(true);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isAbcClassActive.value = false;
  } else {
    isAbcClassActive.value = true;
  }
};

onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

   
  
</script>


<style scoped>
nav {
    background: white;
    width: 100%;
    margin: 0 auto 0 auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 0 20px 0 20px;
    transition: .2s ease;
}
a {
    color: black;

}
.navbar-toggler {
    background: #6A4EE9;
}
.nav_brand {
    color: #6A4EE9;
    font-weight: bold;
    font-size: 3rem;
    border: none;
}
.navbar-toggler:active {
    transform: scale(90%);
}
.navbar-toggler-icon {
  color: white;
}
.navbar_default {
    width: 1200px ;
    margin: 30px auto 0 auto;
    border-radius: 30px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    padding: 0 20px 0 20px;
}

.offcanvas-title {
    font-weight: bold;
    font-size: 3rem;
}
.offcanvas-body {
    background-color: white;
}
.offcanvas-body a {
    color: black;
}
.offcanvas-body li a{
    font-size: 2rem;
}
.offcanvas-body li a:hover {
    color: black !important;
}
.offcanvas-body .dropdown-item {
    font-size: 1.3rem;
}
.dropdown-menu{
    transition: all 0.5s ease;
}
.offcanvas-header {
    background-color: white;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
    color: #6A4EE9;
}
.btn-close:focus {
    box-shadow: unset;
}
.active {
    color: #6A4EE9 !important;
}

@media only screen and (max-width: 1000px) {
    .navbar_default {
        width: unset;
    margin: unset;
    border-radius: unset;
  }
}


</style>