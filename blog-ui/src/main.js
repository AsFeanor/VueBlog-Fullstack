import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'
import Header from './Layouts/Header-layout.vue'
import UpdateBlog from './components/UpdateBlog.vue'
import HelloWorld from './components/HelloWorld.vue'
import Footer  from './Layouts/FooterLayout.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',
            name: "HelloWorld",
            component: HelloWorld },

      { path: '/update/:id',
        name: "UpdateBlog",
        component: UpdateBlog }
    ]
  })


const app = createApp(App);


app.component('Header-layout', Header);
app.component('FooterLayout', Footer);




app.use(router);

app.config.globalProperties.$axios = axios;

app.mount('#app');