import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'; // router를 import

createApp(App)
    .use(vuetify)
    .use(router)
    .mount('#app')


    
