import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { defineStore } from 'pinia'

const app = createApp(App)
const pinia=CreatePinia();

app.use(pinia)
app.use(router)

app.mount('#app')
