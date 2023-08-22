import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/App.vue';
import Home from '@/pages/Home.vue';
import PageTwo from '@/pages/PageTwo.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/page-two', component: PageTwo },

  ],
});

app.use(router);
app.mount('#app');
