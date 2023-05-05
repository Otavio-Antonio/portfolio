import { createRouter, createWebHashHistory } from "vue-router";

import Site from '@/components/Views/Site.vue'
import Login from '@/components/projetos/Login.vue'

const routes =[
    {path:'/', component: Site},
    {path:'/login', component: Login}
    
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router