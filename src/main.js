import { createApp } from 'vue'
import App from './App.vue'
//utilizando o vue router para o projeto
//npm install vue-router
//importando para o nosso projeto
import router from './router.js'

const Vue = createApp(App)

Vue.use(router)

Vue.mount('#app')
