import { createApp } from 'vue'

// style
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@/assets/css/app.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
    app.use(router)
    app.mount('#app')
