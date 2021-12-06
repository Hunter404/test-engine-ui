import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import quasar from './plugins/quasar'

const app = createApp(App)

app.use(router)
app.use(quasar)

app.mount('#app')
