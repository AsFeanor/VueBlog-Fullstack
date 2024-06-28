import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import { createRouter, createWebHistory } from 'vue-router'
import UpdateBlog from './components/UpdateBlog.vue'
import HelloWorld from './components/HelloWorld.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',
            name: "HelloWorld",
            component: HelloWorld },
      { path: '/update/:id',
        name: "UpdateBlog",
        component: UpdateBlog }
      // Diğer route tanımlamalarını burada ekleyebilirsiniz
    ]
  })


const app = createApp(App);






app.use(router);

app.config.globalProperties.$axios = axios;

app.mount('#app');