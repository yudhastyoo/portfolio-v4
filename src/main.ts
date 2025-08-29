import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const storedTheme = localStorage.getItem('theme')
if (storedTheme === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const app = createApp(App)

app.use(router)

app.mount('#app')
