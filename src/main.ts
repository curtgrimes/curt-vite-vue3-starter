import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from '@/App.vue';
import PageOne from '@/pages/PageOne.vue';
import PageTwo from '@/pages/PageTwo.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/page-one' },
    { path: '/page-one', component: PageOne },
    { path: '/page-two', component: PageTwo },

  ],
});

app.use(router);
app.mount('#app');
