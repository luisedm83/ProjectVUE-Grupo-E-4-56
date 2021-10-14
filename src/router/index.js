import { createWebHistory, createRouter } from "vue-router"

import Home from "@/views/Home.vue"
import Cliente from "@/views/Cliente.vue"
import Servicios from "@/views/Servicios.vue"
import Login from "@/views/Login.vue"
// import Productos from "@/views/Productos.vue"
// import Carrito from "@/views/Carrito.vue"
// import EditarCliente from "@/views/EditarCliente.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/cliente",
        name: "Cliente",
        component: Cliente
    },
    {
        path: "/servicios",
        name: "Servicios",
        component: Servicios
    },
    {
        path: "/login",
        name: "Login",
        component: Login
     }//,
    // {
    //     path: '/posts/:id',
    //     name: 'post',
    //     component: Posts,
    //     meta: { Auth: false, title: 'Listado de posts' }
    //   }



    // {
    //     path: "/clientes/editar",
    //     name: "EditarCliente",
    //     component: EditarCliente
    // },
    // {
    //     path: "/carrito/:total",
    //     name: "Carrito",
    //     component: Carrito
    // },
    // {
    //     path: "/:catchAll(.*)",
    //     component: NotFound,
    // }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router