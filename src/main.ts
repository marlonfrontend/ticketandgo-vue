import './assets/css/tailwind.css'

import { createApp } from 'vue'
import { store } from './store/useStore'
import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueLazyLoad, {})
app.use(store)
app.use(router)

app.mount('#app')
