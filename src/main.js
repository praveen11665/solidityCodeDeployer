import 'bootstrap';
import routes from '@/router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AppView from './view/App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLayOut from '@/layouts/AppLayout.vue';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { createRouter, createWebHistory } from 'vue-router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas)

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(AppView)
app.component('AppLayout', AppLayOut)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(createPinia())
app.mount('#app')