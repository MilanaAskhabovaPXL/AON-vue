import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"

import { createPinia } from 'pinia'
import router from './router'

import { createApp } from 'vue'

import App from './App.vue'

const pinia = createPinia();
const app = createApp(App)

app.use(router);
app.use(pinia);

app.mount('#app')
